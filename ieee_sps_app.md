# IEEE SPS Scholarship Application Draft

## Index

1. [SPS Scholarship Funding](#1-sps-scholarship-funding)
2. [Signal Processing Courses](#2-signal-processing-courses)
3. [Your Interests](#3-your-interests)
4. [Personal Statement](#4-personal-statement)
5. [Your Activities](#5-your-activities)
6. [Publications](#6-publications)
7. [Lectures / Teaching](#7-lectures-teaching)
8. [Career Experience](#8-career-experience)

---
## 1. SPS Scholarship Funding

**Question:** Please describe why you are seeking funding. Be as specific as possible.
**word limit:** 250

I am seeking SPS Scholarship funding because my research depends on building sensing systems where the measurement itself is designed. My work is in computational imaging: using signal processing during acquisition, not only after capture. Instead of treating the sensor as a passive recorder, I work on systems where the illumination, physical medium, waveform, timing, sampling, and reconstruction are designed together so that the sensor can measure information it otherwise could not.

This kind of research is hardware-intensive. In acousto-optic scanning, I investigate how ultrasound can create refractive-index fields that steer light, offering a way to reduce the mechanical limits of line-scanning systems. Making this work requires repeated testing with acoustic transducers, optics, water-tank geometry, waveform generation, triggering, calibration, and sound-light synchronization. In underwater optical communication, the same measurement-design idea becomes a communication problem, requiring modulation, bit timing, sampling, and synchronization. In LiDAR, I have worked on using radio-frequency signal-processing ideas for high-speed optical sensing and sub-millimeter vibration recovery. My current subsurface imaging work similarly depends on careful measurement design for weak scattered optical signals.

If permitted through Dartmouth, I would use the scholarship for hardware acquisition and experimental development. I would also use it to attend signal-processing-focused conferences, tutorials, and workshops such as ICCP, ICIP, ICASSP, and IEEE/CVF workshops, and to support small outreach demonstrations introducing students to sensing, optics, and signal processing.

---

## 2. Signal Processing Courses

**Question:** Please list at least three signal processing related courses that you have taken or expect to take. Include course names, numbers, terms, and how they relate to your major or signal processing interests.

**COSC273 Computational Photography — Spring 2024**

This course connected imaging with signal processing during acquisition. Defocus and deconvolution treated blur as convolution with a point-spread function. Coded photography showed how optical modulation before capture enables computational recovery afterward. Light fields modeled images as sampled spatio-angular signals for refocusing and view synthesis. Time-of-flight imaging connected optical measurements to delay and phase estimation. The course shaped how I think about imaging as signal formation, sampling, and reconstruction.

**COSC18937 Visual Computing Seminar — Fall 2025, Winter 2026, Spring 2026**

1. Fall 2025 — Underwater optical backscatter communication using acousto-optic beam steering, with emphasis on timing, synchronization, modulation, and signal recovery in underwater environments.

2. Winter 2026 — SDR-inspired LiDAR, adapting carrier modulation and quadrature demodulation for high-speed depth and vibration sensing.

3. Spring 2026 — Solar-orientation sensing, where photo-differential measurements estimate the direction of increasing sunlight. The sensing process was connected to box filtering and its sinc-shaped Fourier-domain response.

**COSC287 Rendering Algorithms — Fall 2024**

This course covered forward image formation, light transport, appearance modeling, and sampling. These ideas are important for inverse imaging because reconstruction depends on understanding how optical measurements are physically generated.

**COSC274 Machine Learning & Statistical Data Analysis — Spring 2020**

This course covered statistical learning, inference, feature extraction, classification, and convolutional neural networks. It helped me understand convolution as both a classical signal-processing operation and a learnable mechanism for extracting structure from images and sensor measurements.

**COSC183 Computer Vision — Spring 2020**

This course prepared me to work with image and video signals through feature extraction, stereo, 3D perception, geometry estimation, and image-based inference. It formed an important foundation for my later work in computational imaging and sensing.

**Additional relevant preparation**

Outside this graduate coursework, I completed undergraduate coursework in Linear Algebra and Digital Logic Design. I have also independently studied basics of Fourier optics and LCR circuits, especially their Fourier-domain interpretations for filtering, resonance, and frequency response. This preparation supports my work in coded imaging, modulation, synchronization, and sensing hardware.

---

## 3. Your Interests

**Question:** Explain how your personal interests and career goals have been impacted by your interest in engineering. Explain why you feel you deserve to be selected as an SPS Scholarship recipient, where you see yourself in the future, and how you became interested in signal processing as opposed to other fields.
**word limit:** 500 words

My interest in signal processing grew from a practical engineering question: can we make a sensor measure something new by designing the signal during capture? This is how I understand computational imaging. It is not only image cleanup after a camera records data. It is the use of coding, modulation, timing, optics, sampling, and reconstruction so that the measurement itself carries the right information.

I came to this from software engineering, computer vision, and real-time graphics. That background taught me how to reason about images, geometry, appearance, and algorithms. During my PhD, I began to see imaging more as a physical measurement process. Light has to be generated, shaped, sent through a medium, sampled by hardware, affected by noise, and then reconstructed. Signal processing gave me a way to reason about that full chain.

My first PhD project started with a clear engineering limitation. Line scanners often rely on moving mirrors, and mechanical motion is limited by friction, inertia, and alignment. I explored whether a physical medium could do the scanning instead. In our acousto-optic system, ultrasound in water creates pressure variations, and those variations create refractive-index fields that steer light into optical line profiles. The idea was simple to state but hard to realize. It required acoustic waveform design, timing control, triggering, calibration, and synchronization between the sound field and the light passing through it. This project made me appreciate signal processing as part of sensing, not just post-processing.

The next project used a similar acousto-optic idea for underwater optical communication. Steering light was only the starting point. To send information, we needed waveform generation, bit timing, delay control, sampling choices, phase modulation, synchronization, and phase-shift keying under real underwater and hardware constraints. This showed me how communication signal processing changes when it must be implemented through optics and water.

In SDR-ToF LiDAR, I worked on a different but related idea: using software-defined radio concepts for optical time-of-flight sensing and sub-millimeter vibration recovery. Carrier mixing and unmixing, quadrature demodulation, ADC sampling, SNR analysis, and optical signal modeling were closely tied to how the laser measurement was formed.

I believe I deserve to be selected because my work uses signal processing to build physical sensing systems, not only to analyze data after capture. I do not claim to have mastered the field, but it has become the language that connects my software background to hardware, optics, communication, and reconstruction. In the AI era, I see this foundation as important because it clarifies what should be measured, what information is recoverable, and how learning-based reconstruction should be constrained. My goal is to build imaging, LiDAR, communication, and biomedical sensing systems where signal processing expands what sensors can measure during acquisition.

---

## 4. Personal Statement

**Question:** Where do you see yourself in 5, 10, or 20 years? How will you use signal processing in your future career?
**word limit:** 500 words

My immediate career goal is to build an academic research career around computational imaging and sensing systems. The view that guides me is simple: computational imaging is signal processing at the sensing stage, not only signal refinement after capture. I want to build systems where illumination, waveform design, timing, physical modulation, sampling, and reconstruction are designed together so that a sensor can measure information it would otherwise miss.

Over the next one to two years, I want to complete my PhD by bringing my projects together around this theme of measurement design. My acousto-optic imaging work investigates how ultrasound-driven refractive-index fields can reduce the limits of mechanical scanning. My underwater optical communication work uses the same steering principle, but adds modulation, bit timing, sampling, and synchronization to transmit information through water. My SDR-ToF LiDAR work adapts radio-frequency signal-processing ideas to optical sensing for high-speed depth and sub-millimeter vibration measurement. These projects have taught me that the physical signal, hardware timing, and reconstruction algorithm should be designed as one system.

By the five-year mark, I hope to have moved from this PhD foundation into an independent research career, ideally as a faculty member or in a research role that directly helps me establish my own lab. I am ambitious about this goal. I want to start producing novel sensing methods for difficult measurement regimes: low light, weak scattering, high-speed motion, underwater propagation, and eventually single-photon-sensitive or quantum-level measurements. My current work at Bosch Research on under-skin/subsurface imaging is one step in this direction because the useful optical signal is weak, scattered, and indirect.

In ten years, I want my work to extend computational imaging beyond conventional cameras and scanners into broader scientific and engineering domains. I am interested in whether the same idea---designing the measurement through optics, modulation, sampling, and reconstruction---can help in areas such as solar-energy systems, astronomical imaging, biomedical sensing, underwater sensing, and other settings where the useful signal is weak, indirect, or difficult to measure. My broader goal is to develop sensing methods that make previously hard-to-observe physical phenomena measurable, so that we can better understand the world we live in.

Longer term, I want to train researchers who can take this direction further than I can alone. Some may become faculty, some may become scientists at national laboratories, and some may build sensing systems in industry. I want them to be strong in signal processing, grounded in physics, and willing to build working systems. To me, the purpose of this work is not only to make better images, but to create new ways of measuring physical reality.


---

## 5. Your Activities

**Question:** List your top achievements and/or awards. Information on volunteer or employment experience is also helpful.
**word limit:** 500 words

My top achievements are centered on building signal-processing-driven sensing systems, presenting this work, mentoring students, and engineering outreach.

**Research and system building.** My first major PhD project investigated a way to overcome the mechanical limits of line-scanning systems. Instead of using a moving mirror, we used ultrasound in water to create refractive-index fields that steer light and form optical line profiles. I worked on acousto-optic imaging hardware, waveform generation, synchronization, triggering, calibration, and experimental testing. This work, “Structured Light with a Million Light Planes per Second,” was accepted to IEEE TPAMI / ICCP.

My next major project turned acousto-optic beam steering into an underwater optical communication system. I developed the waveform generation and synchronization pipeline, including timing delays, triggers, sampling, phase modulation, and phase-shift keying. The project connected optical hardware with communication signal processing under underwater constraints. This work, “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering,” was accepted to SIGGRAPH Asia / ACM TOG, and I am a joint first author.

In another project, I worked on SDR-ToF, where we explored how software-defined radio ideas can be adapted to optical time-of-flight sensing. The system uses carrier mixing and unmixing, quadrature demodulation, ADC sampling, and SNR analysis to enable million-depth-samples-per-second LiDAR and sub-millimeter vibration sensing. This work is currently under review. My current internship at Bosch Research extends this direction to under-skin/subsurface imaging, where weak scattered optical signals require physical modeling and computational reconstruction.

**Presentations and community building.** I have presented work across computational photography, vision, graphics, and imaging communities. My presentations include the invited talk “From Rendering to Imaging: Controlling Light with Sound” at the New England Symposium on Graphics at MIT in 2026; “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering” at SIGGRAPH Asia 2025; “Structured Light with a Million Light Planes per Second” at ICCP 2025 and NECV 2025; and “Interactive Segmentation of Radiance Fields” at NECV 2023.

**Teaching, mentoring, and outreach.** I have mentored students across career stages, including Ava Carlson, Saurish Gali, Atul R. Agarwal, Atharv Agashe, and Rahul Goel. I have served as a teaching assistant or mentor for Computational Photography, Computer Vision, Advanced Graphics AR/VR, Computer Graphics, and AI/ML projects. In Computational Photography, I received a High Pass for supervised undergraduate teaching. I also participated in Dartmouth Science Day outreach, setting up demonstrations to encourage middle and high school students to pursue engineering.

**Awards and service.** I received a Guarini travel grant in 2024, contributed to patent applications/disclosures related to novel imaging and communication, reviewed for AAAI, ICVGIP, CVPR, NeurIPS, and SIGGRAPH, was listed on the Roll of Honors as academically second in my undergraduate batch at JNTUK-UCEV, and was a Certified Programmer through MissionRnD.

---

## 6. Publications

**Question:** Have you published any papers, conference papers, etc.? If yes, please include the citation.
**word limit:** 500 words

Yes. I have published work in conferences and journals.

**Under Review**

1. Ramchander Bhaskara*, Dhawal Sirikonda*, Omkar Vengulekar*, Joseph Lazzaro, Juhyeon Kim, Suren Jayasuriya, and Adithya Pediredla. “SDR-ToF: Million Depth Samples per Second using Software-Defined Radio.” Under review. (*joint first author)

**Peer-Reviewed Conference and Journal Publications**

2. Atul Rohit Agarwal*, Dhawal Sirikonda*, Atharv Agashe, Ziang Ren, Dinithi Silva-Sassaman, Charles Carver, Alberto Quattrini Li, Xia Zhou, and Adithya Pediredla. “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering.” SIGGRAPH Asia / ACM Transactions on Graphics, 2025. (*joint first author)

3. Dhawal Sirikonda, Praneeth Chakravarthula, Ioannis Gkioulekas, and Adithya Pediredla. “Structured Light with a Million Light Planes per Second.” IEEE International Conference on Computational Photography / IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025.

4. Vinayak Gupta, Rahul Goel, Dhawal Sirikonda, and P. J. Narayanan. “GSN: Generalisable Segmentation in Neural Radiance Fields.” AAAI, 2024.

5. Rahul Goel*, Dhawal Sirikonda*, Saurabh Saini, and P. J. Narayanan. “Interactive Segmentation of Radiance Fields.” CVPR, 2023. (*joint first author)

6. Dhawal Sirikonda, Aakash KT, and P. J. Narayanan. “Real-Time Rendering of Arbitrary Surface Geometries using Learnt Transfer.” ICVGIP, 2022.

7. Rahul Goel*, Dhawal Sirikonda*, Saurabh Saini, and P. J. Narayanan. “StyleTRF: Stylizing Tensorial Radiance Fields.” ICVGIP, 2022. (*joint first author)

**Workshop and Poster Publications**

8. Rahul Goel, Dhawal Sirikonda, Rajvi Shah, and P. J. Narayanan. “FusedRF: Fusing Multiple Radiance Fields.” XRNeRF CVPR Workshop, 2023.

9. Dhawal Sirikonda and Aakash KT. “Learnt Transfer for Surface Geometries.” High Performance Graphics Poster, 2022.

10. Dhawal Sirikonda, Aakash KT, and P. J. Narayanan. “Transfer Textures for Fast Precomputed Radiance Transfer.” Eurographics Poster, 2022.

**Patent Applications**

11. Adithya Pediredla, Dhawal Sirikonda, et al. “Underwater Optical Backscatter Communication Using Acousto-Optic Beam Steering.” U.S. Patent Application No. 63/913,085, filed November 6, 2025.

12. Adithya Pediredla, Dhawal Sirikonda, et al. “Event-Enhanced Histopathology Apparatus.” U.S. Patent Application No. 63/837,253, filed July 2, 2025.

13. Adithya Pediredla, Dhawal Sirikonda, Ramchander Bhaskara, et al. “MHz Depth Sensing with Software-Defined Radios.” U.S. Patent Application, filed March 22, 2025.

---

## 7. Lectures / Teaching

**Question:** As part of your degree, have you lectured or are you currently teaching/lecturing a course related to signal processing? If yes, please provide the name and a description of the course.
**word limit:** 500 words

Yes. I have served as a teaching assistant or mentor for several courses related to computational imaging, vision, graphics, and machine learning.

At Dartmouth, I served as a teaching assistant for COSC273 Computational Photography. This course is closely related to signal processing because it studies imaging as a designed measurement process. Topics include image formation, camera models, Fourier-domain reasoning, filtering, deconvolution, coded imaging, time-of-flight imaging, and reconstruction from optical measurements. As a TA, I helped students connect mathematical ideas with implementation, especially how optics, sensors, noise, and algorithms together determine what an image contains. I received a High Pass for supervised undergraduate teaching in this role.

I have also served as a teaching assistant for Computer Vision at Dartmouth. This course relates to signal processing through image and video signals, feature extraction, stereo, geometry, 3D perception, and image-based inference. It strengthened my ability to explain how visual data can be processed to recover structure and meaning from measurements.

Before my PhD, at IIIT-Hyderabad, I served as a teaching assistant for Advanced Graphics AR/VR and Computer Graphics. These courses connected rendering, geometry, sampling, appearance modeling, and visual computation. They also relate to signal processing because rendering and imaging both require understanding how visual signals are generated, sampled, transformed, and reconstructed.

In addition to formal teaching, I have mentored students including Ava Carlson, Saurish Gali, Atul R. Agarwal, Atharv Agashe, Rahul Goel, and others across computational imaging, graphics, communication, and sensing projects. Some of this mentoring involved signal-processing topics such as quadrature modulation, demodulation, BPSK, synchronization, and waveform generation.

Teaching and mentoring have helped me see how students from computer science and graphics backgrounds can initially view signal processing as abstract. My goal as a teacher is to make these ideas concrete through imaging, LiDAR, communication, and sensing examples.

---

## 8. Career Experience

**Question:** Describe any career experience outside of your university, including internships or time spent at other universities.
**word limit:** 500 words

I am currently interning at Bosch Research and Technology Center in Pittsburgh, where I am working on a sensing system for under-skin/subsurface imaging. This internship is directly related to my research direction because it involves computational imaging, sensor design, signal acquisition, and reconstruction from weak optical measurements affected by scattering. The project connects to diffuse optical tomography, where photon transport through tissue can be modeled using diffusion approximations. I am particularly interested in how scattering can sometimes be approximated using convolutional models, making the inverse problem more tractable.

This internship has exposed me to industrial sensing constraints. The system must be physically plausible, robust, and useful outside a controlled academic demonstration. That perspective is valuable for my long-term goal of building sensing systems that combine hardware, physics, signal processing, and reconstruction. It also extends my research beyond fast scanning, optical communication, and LiDAR into biomedical sensing, where the measured signal is indirect and the reconstruction depends strongly on the physical signal model.
**Internship duration:** Summer 2026.

Before starting my PhD, I completed my master’s research with Prof. P. J. Narayanan at the International Institute of Information Technology Hyderabad. I worked at the intersection of computer vision, 3D vision, real-time graphics, appearance modeling, radiance fields, and visual computing. My projects included real-time rendering, radiance-field segmentation, and appearance modeling. This experience gave me the software, mathematical, and visual-computing foundation that later helped me transition into computational imaging and signal-processing-driven sensing. It also gave me experience working in a different research environment and moving between graphics, vision, and imaging communities.
