(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let storedMotion;
  try { storedMotion = localStorage.getItem('ew-motion'); } catch {}
  let motionOff = reduced.matches || storedMotion === 'off';
  const motionButton = $('.motion-toggle');
  function renderMotion() {
    root.dataset.motion = motionOff ? 'off' : 'on';
    motionButton.textContent = `Motion: ${motionOff ? 'off' : 'on'}`;
    motionButton.setAttribute('aria-pressed', String(motionOff));
    motionButton.setAttribute('aria-label', `Reduced motion ${motionOff ? 'enabled' : 'disabled'}. Toggle reduced motion.`);
  }
  renderMotion();
  reduced.addEventListener('change', () => { motionOff = reduced.matches || storedMotion === 'off'; renderMotion(); });
  motionButton.addEventListener('click', () => {
    motionOff = !motionOff;
    // The OS preference continues to suppress CSS motion independently.
    if (reduced.matches) motionOff = true;
    storedMotion = motionOff ? 'off' : 'on';
    try { localStorage.setItem('ew-motion', storedMotion); } catch {}
    renderMotion();
  });

  let toastTimer;
  function toast(message) {
    const el = $('.toast');
    el.textContent = message;
    el.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('visible'), 3000);
  }

  const dialog = $('.command-dialog');
  const search = $('#page-search');
  const links = $$('.command-results a');
  function filterPages() {
    const q = search.value.trim().toLowerCase();
    links.forEach(link => { link.hidden = !link.textContent.toLowerCase().includes(q); });
    $('.search-empty').hidden = links.some(link => !link.hidden);
  }
  function openFinder() {
    if (dialog.open) return;
    search.value = '';
    filterPages();
    dialog.showModal();
    search.focus();
  }
  $('.command-trigger').addEventListener('click', openFinder);
  $('.close-command').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  search.addEventListener('input', filterPages);
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      dialog.open ? dialog.close() : openFinder();
    }
  });
  dialog.addEventListener('keydown', event => {
    const visible = links.filter(link => !link.hidden);
    if (!visible.length) return;
    const index = visible.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      visible[(index + 1) % visible.length].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index <= 0) search.focus(); else visible[index - 1].focus();
    } else if (event.key === 'Enter' && document.activeElement === search) {
      event.preventDefault();
      visible[0].click();
    }
  });

  const board = $('.interactive-board');
  if (board) {
    let busy = false;
    $('.board-trigger', board).addEventListener('click', () => {
      if (busy) return;
      busy = true;
      board.classList.add('sending');
      $('.board-readout').textContent = 'SIGNAL IN → DATAPATH → SIGNAL OUT';
      setTimeout(() => {
        board.classList.remove('sending');
        $('.board-readout').textContent = 'SIGNAL RECEIVED. NEXT QUESTION?';
        busy = false;
      }, motionOff ? 80 : 800);
    });
  }

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
      toast('Email address copied.');
    } catch {
      toast('Copy unavailable. Use the email link to get in touch.');
    }
  });
})();
