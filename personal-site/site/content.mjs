export const profile = {
  name: 'Ethan (Yichen) Wu',
  focus: 'FPGA · Digital Systems · Low-Latency Hardware',
  identity: 'Incoming Electrical Engineering Student · NYU Tandon',
  start: 'Spring 2027',
  email: 'ethanwu752@gmail.com',
  github: 'https://github.com/ethan527w',
  linkedin: 'https://www.linkedin.com/in/ethan-wu-20b8092a1',
  oldSite: 'https://sites.google.com/nyu.edu/ethanwu',
};

export const projects = [
  {
    slug: 'mosaic', title: 'MOSAIC', category: 'Hardware', eyebrow: 'FPGA / FIXED-CYCLE DATAPATH',
    summary: 'An **FPGA order-book prototype** exploring predictable, fixed-cycle processing.',
    tags: ['Verilog', 'Artix-7', 'UART'], image: 'chip',
    repo: 'https://github.com/ethan527w/fpga-mosaic',
    lead: 'Exploring **predictable latency** through FPGA architecture.',
    body: [
      ["The question", ["Explore a **two-share masked threshold decision** within a fixed-cycle order-processing datapath.", "Target the **ALINX AX7103B / Artix-7** platform."]],
      ["Inside the pipeline", ["Receive Python host commands over **UART**; parse accepted commands and update the price-level book.", "Select the **best bid and ask**, then return one match candidate.", "Store **16 price levels per side**, using 8-bit saturating quantities."]],
      ["My role", ["**Maintain and contribute** to the prototype, integrating RTL, Python host tools, and verification.", "Develop practical experience in **digital design** and hardware–software co-design."]],
      ["Timing, with context", ["The repository records **32 core cycles / 320 ns at 100 MHz** after command acceptance.", "This measures **internal processing**; it excludes host software and UART transmission.", "The request and response take approximately **1.39 ms on the wire**."]],
      ["Recorded verification", ["The README reports **13 product testbenches** and 65,536 plain-versus-masked strategy cases.", "A repaired implementation records **+1.570 ns WNS at 100 MHz**.", "These are **repository-reported results**, not independently rerun measurements; generated reports are absent from Git and should be regenerated before relying on them."]],
      ["Current boundary", ["The repaired product image still needs **board regression**.", "Physical characterization and leakage tests remain open; experimental masking does **not establish side-channel resistance**.", "This is a **research prototype**; match candidates do not execute trades."]],
    ],
    facts: [['Platform', 'Artix-7'], ['Core clock', '100 MHz'], ['Internal result', '32 cycles'], ['Status', 'Research prototype']],
  },
  {
    slug: 'pianocore', title: 'Pianocore', category: 'Hardware', eyebrow: 'EMBEDDED / MUSIC / LEARNING',
    summary: '**ESP32-based piano guidance**, connecting digital music to physical keys with LEDs.',
    tags: ['ESP32', 'C++', 'Bluetooth'], image: 'piano',
    lead: '**LED piano guidance** for learning the next note.',
    body: [
      ["The idea", ["Use **LED guidance** to help learners connect MIDI tutorials with physical piano keys.", "Explore an **accessible learning interface** for reading and playing music."]],
      ["The system", ["Combine an **ESP32**, C++ firmware, Bluetooth, and LED control.", "Connect **embedded programming** with real-time music decoding."]],
    ], facts: [['Controller', 'ESP32'], ['Firmware', 'C++'], ['Interface', 'LED guidance'], ['Area', 'Embedded systems']],
  },
  {
    slug: 'neuro-mech', title: 'Neuro-Mech', category: 'Research', eyebrow: 'ROBOTICS / PERCEPTION PIPELINE',
    summary: '**Video-to-motion tooling** for motion descriptors and semantic annotations in embodied AI.',
    tags: ['Python', 'PyTorch', 'Computer vision'], image: 'motion',
    repo: 'https://github.com/ethan527w/Neuro-Mech-Engine',
    lead: 'Connecting **visual perception** with motion descriptors.',
    body: [
      ["The question", ["Turn demonstration videos into inputs for **robotic imitation learning**.", "Combine **visual perception**, motion measurements, and language annotations in a local pipeline."]],
      ["Four processing stages", ["**Prepare video**: slice clips and filter for hands.", "**Estimate geometry**: obtain relative depth and hand landmarks.", "**Describe motion**: compute acceleration, jerk, and related descriptors.", "**Annotate semantics**: use a local vision-language model to label the dataset."]],
      ["What the data represents", ["Produce **normalized 2.5D motion descriptors**.", "Monocular relative depth is **not calibrated physical 3D**.", "See the **source repository** for implementation details and current limitations."]],
    ], facts: [['Perception', 'Depth + landmarks'], ['Motion', 'Acceleration / jerk'], ['Semantics', 'Local VLM'], ['Output', 'Annotated JSON']],
  },
  {
    slug: 'flow', title: 'Flow', category: 'Software', eyebrow: 'NATIVE IOS / PERSONAL TOOLS',
    summary: 'A **SwiftUI journal** for quick capture, time blocking, and daily review.',
    tags: ['SwiftUI', 'SwiftData', 'Swift Charts'], image: 'flow',
    repo: 'https://github.com/ethan527w/Flow', lead: '**Quick capture** and a clearer record of the day.',
    body: [
      ["The idea", ["Support **quick journal entries**, a timeline, and planned time blocks.", "Track **mood and energy** for a clearer view of the day."]],
      ["Implementation", ["Use **SwiftUI, SwiftData, and Swift Charts** with an MVVM architecture.", "An **AI-assisted day review** compares recorded activities with the planned schedule.", "Find the app source and setup instructions in the **repository**."]],
    ], facts: [['Platform', 'iOS 17+'], ['UI', 'SwiftUI'], ['Storage', 'SwiftData'], ['Charts', 'Swift Charts']],
  },
];

export const research = [
  {
    id: 'dmd-2026',
    title: 'Efficiency Over Complexity: Optimal Neural Architectures for Near-Term Forecasting of Parkinsonian Freezing of Gait',
    authors: 'Yichen Wu, Junyu Chen, and Hao Su',
    venue: 'Design of Medical Devices Conference · 2026',
    type: 'Peer-reviewed conference contribution / poster',
    note: 'Comparing **neural architectures** for near-term freezing-of-gait forecasting from wearable inertial data.',
    href: 'https://dmd.umn.edu/2026/posters2', link: 'Conference record',
    extra: 'https://github.com/ethan527w/FOG_Algorithm_Comparison_LOSOCV', extraLabel: 'Related LOSO-CV experiments',
  },
  {
    id: 'nerc-2025',
    title: 'Soft Exosuit with Freezing-of-Gait Detection for Haptic Cueing in Parkinson’s Disease',
    authors: 'Junyu Chen, Yichen Wu, Juncheng Zhou, and Hao Su',
    venue: 'Northeast Robotics Colloquium · 2025',
    type: 'Collaborative conference abstract',
    note: '**IMU-based detection** paired with a soft pneumatic exosuit for hip-extension haptic cueing.',
    href: 'https://haosu-robotics.github.io/PDFs/2025_NORTHEAST_ROBOTICS_COLLOQUIUM_Soft_Exosuit_with_Freezing_of_Gait_Detection_for_Haptic_Cueing_in_Parkinsons_Disease.pdf',
    link: 'Read abstract (PDF)',
  },
  {
    id: 'ssrn-review',
    title: 'Types of Exoskeletons, Exoskeleton AI Algorithms, and Integration of the Two: Advances From 2020 to 2024',
    authors: 'Yichen Wu',
    venue: 'SSRN · Posted January 2025',
    type: 'Review / preprint',
    note: 'An **independent review** of exoskeleton systems and AI integration; written in November 2024 and posted as an SSRN preprint in January 2025.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5012000', link: 'Read on SSRN',
  },
];

export const experiences = [
  {
    period: 'Research focus',
    title: 'Wearable robotics & freezing-of-gait prediction',
    context: 'Biomedical robotics / time-series learning',
    body: ["Processed **inertial sensor data** and reconstructed and compared temporal models.", "Revisited validation with **LOSO-CV** after identifying leakage risks in an earlier analysis."],
  },
  {
    period: 'Research background',
    title: 'Neural signals & computational modeling',
    context: 'Chiel Lab · Case Western Reserve University',
    body: ["Participated in **neural signal analysis** and computational modeling in Dr. Hillel Chiel’s research group.", "Worked with the **Aplysia nervous system** and compound action potentials."],
  },
  {
    period: '2024 · Earlier research',
    title: 'Computational physics & the edge-burst phenomenon',
    context: 'Tsinghua University · Research experience',
    body: ["Ran **numerical simulations** of perturbation theory related to the edge-burst phenomenon.", "Used **Mathematica and MATLAB** to reproduce figures and compare numerical results with theoretical expectations."],
  },
];

export const currentWork = {
  title: 'UDP market-data processing on FPGA',
  status: 'Architecture design / MVP planning',
  summary: 'Designing an **FPGA-based UDP pipeline**, from simulated market data to a configurable threshold decision.',
  stages: ['Python data source', 'Ethernet / IPv4 / UDP', 'FIFO & buffering', 'Payload decoder', 'Threshold decision', 'UART debug output'],
};
