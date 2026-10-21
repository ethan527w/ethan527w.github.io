(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  $$('.filter').forEach(button => {
    button.addEventListener('click', () => {
      $$('.filter').forEach(other => {
        const active = other === button;
        other.classList.toggle('active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      let count = 0;
      $$('.project-item').forEach(item => {
        item.hidden = button.dataset.filter !== 'All' && item.dataset.category !== button.dataset.filter;
        if (!item.hidden) count++;
      });
      $('.filter-count').textContent = `${count} project${count === 1 ? '' : 's'}`;
    });
  });

  const clock = $('#clock');
  const cycles = $('#cycles');
  if (clock && cycles) {
    function renderTiming() {
      const mhz = Number(clock.value);
      const ticks = Number(cycles.value);
      const latency = ticks / mhz * 1000;
      const formatted = Number.isInteger(latency) ? String(latency) : latency.toFixed(1);
      $('#latency-value').value = formatted;
      $('#clock-label').value = `${mhz} MHz`;
      $('#cycles-label').value = `${ticks} cycles`;
      $('#timing-context').textContent = `${ticks} cycles at ${mhz} MHz = ${formatted} ns`;
      const halfPeriod = 600 / (mhz / 25 * 4);
      let path = 'M0 75';
      for (let x = halfPeriod, high = false; x <= 600 + halfPeriod; x += halfPeriod) {
        path += `H${Math.min(x, 600)}V${high ? 75 : 25}`;
        high = !high;
      }
      $('#clock-wave').setAttribute('d', path);
    }
    clock.addEventListener('input', renderTiming);
    cycles.addEventListener('input', renderTiming);
    $('#reset-timing').addEventListener('click', () => { clock.value = '100'; cycles.value = '32'; renderTiming(); });
    renderTiming();
  }

  const copy = $('.copy-email');
  if (copy) copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copy.dataset.email);
      $('.copy-status').textContent = 'Email address copied.';
    } catch {
      $('.copy-status').textContent = 'Copy unavailable. Use the email link to get in touch.';
    }
  });
})();
