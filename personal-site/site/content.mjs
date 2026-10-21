export const profile = {
  name: 'Ethan Wu',
  focus: 'Hardware · FPGA · Systems',
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
      ['Timing, with context', 'The implementation publishes a result after 32 core cycles: 320 ns at 100 MHz. That is internal processing after command acceptance. Host software and UART transmission are excluded; the request and response require approximately 1.39 ms on the wire.'],
      ['Evidence and next steps', 'The repository includes RTL, self-checking testbenches, constraints, build scripts, and host tools. Its README records a repaired build and timing closure, with artifacts to be regenerated. The repaired image still needs board regression and physical characterization. Functional masking is experimental; physical leakage resistance has not been demonstrated. This is a research prototype, with no trade execution or production-exchange claim.'],
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
  {title:'Efficiency Over Complexity: Optimal Neural Architectures for Near-Term Forecasting of Parkinsonian Freezing of Gait', venue:'Design of Medical Devices Conference · 2026', note:'Listed as accepted in my earlier portfolio. Model comparison for near-term freezing-of-gait forecasting.', href:'https://github.com/ethan527w/FOG_Algorithm_Comparison_LOSOCV', link:'Related experiment repository'},
  {title:'Deep Learning Models for Predicting Parkinson’s Freeze of Gait: Accuracy Comparison of LSTM, CNN, TCN, and Transformer', venue:'Medical robotics · Model comparison', note:'Comparing classical and deep-learning approaches to forecasting freezing-of-gait events from wearable IMU time-series data.', href:'https://github.com/ethan527w/FOG_Algorithm_Comparison', link:'Explore experiment code'},
  {title:'Types of Exoskeletons, Exoskeleton AI Algorithms, and Integration of the Two: Advances From 2020 to 2024', venue:'Literature review · SSRN', note:'An earlier review of exoskeleton systems and the role of AI in their control and integration.', href:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5012000', link:'Read on SSRN'},
];
