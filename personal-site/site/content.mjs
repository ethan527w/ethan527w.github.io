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
    summary: 'An order-book research prototype built around a simple constraint: a result in a fixed number of clock cycles.',
    tags: ['Verilog', 'Artix-7', 'UART'], image: 'chip',
    repo: 'https://github.com/ethan527w/fpga-mosaic',
    lead: 'Exploring the architecture beneath predictable latency.',
    body: [
      ['The question', 'Can an experimental two-share masked threshold decision fit into a fixed-cycle order-processing datapath? MOSAIC explores that question on an ALINX AX7103B with an Artix-7 FPGA.'],
      ['Inside the pipeline', 'A Python host sends commands over UART. The FPGA parses each accepted command, updates a price-level book, selects the best bid and ask, and produces one match candidate before publishing a response. The book has 16 price levels per side, with 8-bit saturating quantities.'],
      ['My role', 'I maintain and contribute to the prototype, bringing together RTL, Python host tools, and the verification workflow. The project is part of my ongoing development in digital design and hardware–software co-design.'],
      ['Timing, with context', 'The repository records a result after 32 core cycles: 320 ns at 100 MHz. This is internal processing after command acceptance. Host software and UART transmission are excluded; the request and response require approximately 1.39 ms on the wire.'],
      ['Recorded verification', 'The README records 13 product testbenches, 65,536 plain-versus-masked strategy cases, and a repaired implementation with +1.570 ns worst negative slack at 100 MHz. These are recorded build results; the generated reports are not included in Git and should be regenerated before relying on them.'],
      ['Current boundary', 'The repaired product image still needs board regression. Physical characterization and leakage testing remain open, so the experimental masking is not evidence of side-channel resistance. MOSAIC is a functional research prototype; match candidates do not execute trades.'],
    ],
    facts: [['Platform', 'Artix-7'], ['Core clock', '100 MHz'], ['Internal result', '32 cycles'], ['Status', 'Research prototype']],
  },
  {
    slug: 'pianocore', title: 'Pianocore', category: 'Hardware', eyebrow: 'EMBEDDED / MUSIC / LEARNING',
    summary: 'Visual piano guidance, using an ESP32 and LEDs to connect digital music with a physical instrument.',
    tags: ['ESP32', 'C++', 'Bluetooth'], image: 'piano',
    lead: 'Making the next note a little easier to find.',
    body: [
      ['The idea', 'Pianocore explores an accessible way to help learners read and play music. An LED strip adds visual guidance to a piano, connecting MIDI tutorials to the keys in front of the learner.'],
      ['The system', 'The original project uses an ESP32, C++ firmware, Bluetooth, and LED control. It brings together embedded programming, real-time music decoding, and a tangible learning interface.'],
    ], facts: [['Controller', 'ESP32'], ['Firmware', 'C++'], ['Interface', 'LED guidance'], ['Area', 'Embedded systems']],
  },
  {
    slug: 'neuro-mech', title: 'Neuro-Mech', category: 'Research', eyebrow: 'ROBOTICS / PERCEPTION PIPELINE',
    summary: 'From human demonstration videos to motion descriptors and semantic annotations for embodied AI.',
    tags: ['Python', 'PyTorch', 'Computer vision'], image: 'motion',
    repo: 'https://github.com/ethan527w/Neuro-Mech-Engine',
    lead: 'Connecting what a movement looks like with how it behaves.',
    body: [
      ['The question', 'How can ordinary demonstration videos become more useful inputs for robotic imitation learning? Neuro-Mech combines visual perception, motion measurements, and language annotations in a local processing pipeline.'],
      ['Four processing stages', 'Video clips are sliced and filtered for hands, then processed with depth estimation and hand landmarks. A physics stage computes motion descriptors such as acceleration and jerk. A local vision-language model adds semantic labels to the resulting dataset.'],
      ['What the data represents', 'The pipeline produces normalized 2.5D motion descriptors. Monocular relative depth is not a calibrated physical 3D measurement; its outputs need to be interpreted in that context. See the source repository for implementation details and current limitations.'],
    ], facts: [['Perception', 'Depth + landmarks'], ['Motion', 'Acceleration / jerk'], ['Semantics', 'Local VLM'], ['Output', 'Annotated JSON']],
  },
  {
    slug: 'flow', title: 'Flow', category: 'Software', eyebrow: 'NATIVE IOS / PERSONAL TOOLS',
    summary: 'A SwiftUI journal that connects quick capture, time blocking, and a visual review of the day.',
    tags: ['SwiftUI', 'SwiftData', 'Swift Charts'], image: 'flow',
    repo: 'https://github.com/ethan527w/Flow', lead: 'Reducing the distance between a thought and a record.',
    body: [
      ['The idea', 'Flow is an iOS journaling application built for quick entries and a clearer picture of how a day unfolds. It combines a timeline, planned time blocks, and mood and energy tracking.'],
      ['Implementation', 'The app uses SwiftUI, SwiftData, Swift Charts, and an MVVM architecture. An AI-assisted day review compares recorded activities with a planned schedule. The repository contains the app source and setup instructions.'],
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
    note: 'A study of neural architectures for near-term freezing-of-gait forecasting from wearable inertial data.',
    href: 'https://dmd.umn.edu/2026/posters2', link: 'Conference record',
    extra: 'https://github.com/ethan527w/FOG_Algorithm_Comparison_LOSOCV', extraLabel: 'Related LOSO-CV experiments',
  },
  {
    id: 'nerc-2025',
    title: 'Soft Exosuit with Freezing-of-Gait Detection for Haptic Cueing in Parkinson’s Disease',
    authors: 'Junyu Chen, Yichen Wu, Juncheng Zhou, and Hao Su',
    venue: 'Northeast Robotics Colloquium · 2025',
    type: 'Collaborative conference abstract',
    note: 'An IMU-based detection approach paired with a soft pneumatic exosuit for hip-extension haptic cueing.',
    href: 'https://haosu-robotics.github.io/PDFs/2025_NORTHEAST_ROBOTICS_COLLOQUIUM_Soft_Exosuit_with_Freezing_of_Gait_Detection_for_Haptic_Cueing_in_Parkinsons_Disease.pdf',
    link: 'Read abstract (PDF)',
  },
  {
    id: 'ssrn-review',
    title: 'Types of Exoskeletons, Exoskeleton AI Algorithms, and Integration of the Two: Advances From 2020 to 2024',
    authors: 'Yichen Wu',
    venue: 'SSRN · Posted January 2025',
    type: 'Review / preprint',
    note: 'An independent review of exoskeleton systems and their integration with AI. Written in November 2024; available as an SSRN preprint.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5012000', link: 'Read on SSRN',
  },
];

export const experiences = [
  {
    period: 'Research focus',
    title: 'Wearable robotics & freezing-of-gait prediction',
    context: 'Biomedical robotics / time-series learning',
    body: 'Processed inertial sensor data, reconstructed and compared temporal models, and revisited validation using leave-one-subject-out cross-validation after identifying leakage risks in an earlier analysis. This work connects model evaluation with the practical demands of wearable systems.',
  },
  {
    period: 'Research background',
    title: 'Neural signals & computational modeling',
    context: 'Chiel Lab · Case Western Reserve University',
    body: 'Participated in neurophysiology research involving neural signal analysis and computational modeling in Dr. Hillel Chiel’s research group, including work related to the Aplysia nervous system and compound action potentials.',
  },
  {
    period: '2024 · Earlier research',
    title: 'Computational physics & the edge-burst phenomenon',
    context: 'Tsinghua University · Research experience',
    body: 'Worked on numerical simulations and computational analysis of perturbation theory related to the edge-burst phenomenon, using Mathematica and MATLAB to reproduce figures and compare numerical results with theoretical expectations.',
  },
];

export const currentWork = {
  title: 'UDP market-data processing on FPGA',
  status: 'Architecture design / MVP planning',
  summary: 'Currently designing an FPGA-based UDP market-data processing pipeline, from simulated input streams to a configurable threshold decision.',
  stages: ['Python data source', 'Ethernet / IPv4 / UDP', 'FIFO & buffering', 'Payload decoder', 'Threshold decision', 'UART debug output'],
};
