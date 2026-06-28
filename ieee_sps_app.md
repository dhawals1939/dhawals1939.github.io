# IEEE SPS Scholarship Application Draft

## Index

1. [SPS Scholarship Funding](#1-sps-scholarship-funding)
2. [Signal Processing Courses](#2-signal-processing-courses)
3. [Your Interests](#3-your-interests)
4. [Personal Statement](#4-personal-statement)
5. [Your Activities](#5-your-activities)
6. [Publications](#6-publications)
7. [Lectures / Teaching](#7-lectures--teaching)
8. [Career Experience](#8-career-experience)
9. [Detailed Signal Processing Engineering Experience](#9-detailed-signal-processing-engineering-experience)
10. [Other Opportunities to Learn About Signal Processing Engineering Careers](#10-other-opportunities-to-learn-about-signal-processing-engineering-careers)
11. [Optional Academic Explanation](#optional-academic-explanation)

---

## 1. SPS Scholarship Funding

**word limit:** 250

I am seeking SPS Scholarship funding because my PhD research in computational imaging and sensing is both signal-processing-intensive and hardware-intensive. My work builds novel sensors by combining modern signal processing with physical principles from optics, acoustics, and communication theory, many of which were developed decades ago but can now be reinterpreted using today’s computation, synchronization, and hardware control. In practice, this research requires photonics equipment, acoustic components, calibration hardware, sensing devices, data-acquisition tools, and precise triggering/synchronization electronics. These components are expensive, and SPS support would directly help me explore ambitious sensing ideas with greater independence and rigor.

If permitted through my institution, I would use the scholarship to support hardware acquisition and experimental development for imaging and sensing systems. I would also use it to attend signal-processing-focused conferences, tutorials, and workshops such as ICASSP, ICIP, ICCP, and relevant IEEE/CVF workshops.

Beyond direct research support, this funding would help me stay connected to the SPS community as I continue translating signal-processing ideas across domains: from communication to LiDAR, from acousto-optics and electro-optics to fast scanning, and from computational imaging to tissue sensing. SPS support would help me continue developing this cross-domain research direction.

---

## 2. Signal Processing Courses

COSC273 Computational Photography - Spring 2024

This course connected imaging with signal processing at the operator level. Defocus and deconvolution treated blur as convolution with a point-spread function. Coded photography showed how optical modulation before capture enables computational recovery afterward. Light fields modeled images as sampled spatio-angular signals for refocusing and view synthesis. Time-of-flight imaging connected optical measurements to delay and phase estimation. These topics shaped how I think about imaging as signal formation, sampling, and reconstruction.

COSC18937 Visual Computing Seminar - Fall 2025, Winter 2026, Spring 2026

1. Fall 2025 -- Underwater optical backscatter communication using acousto-optic beam steering, emphasizing timing, synchronization, modulation, and signal recovery in challenging underwater environments.

2. Winter 2026 -- SDR-inspired LiDAR, adapting carrier modulation and quadrature demodulation for high-speed depth and vibration sensing.

3. Spring 2026 -- Solar-orientation sensing, where panel motion is optimized using gradient-based control. Photo-differential measurements estimate the direction of increasing sunlight, and the sensing process was connected to box filtering and its sinc-shaped Fourier-domain response.

COSC287 Rendering Algorithms - Fall 2024

This course covered forward image formation, light transport, appearance modeling, and sampling. These ideas are important for inverse imaging systems because reconstruction depends on understanding how optical measurements are physically generated.

COSC274 Machine Learning & Statistical Data Analysis - Spring 2020

This course emphasized statistical learning, inference, feature extraction, classification, and convolutional neural networks before diffusion models became mainstream. It helped me understand convolution as both a classical signal-processing operation and a learnable mechanism for extracting structure from images and sensor measurements.

COSC183 Computer Vision - Spring 2020

This course prepared me to work with image and video signals through feature extraction, stereo, 3D perception, geometry estimation, and image-based inference. It formed an important foundation for my later work in computational imaging and sensing.

---

## 3. Your Interests

**word limit:** 500 words

My interest is in building sensing systems that do not simply record signals, but deliberately design, modulate, and reconstruct them. I came to this interest through an unconventional path. My earlier training was in software engineering, computer vision, and real-time graphics, where I mostly encountered image processing through libraries and off-the-shelf pipelines. I could use these tools, but I had not yet appreciated how deeply signal processing shaped the systems behind them.

That changed during my PhD at Dartmouth, through my advisor’s computational photography lectures. As a computer scientist, the first idea that made signal processing click for me was computational complexity. In the spatial domain, Gaussian blur and bilateral filtering can both appear to be local weighted averaging operations. But Gaussian blur is shift-invariant: the same kernel applies everywhere. That structure means it can be accelerated through separability or transformed into multiplication in the Fourier domain, reducing repeated local computation into a more efficient operation. Bilateral filtering, on the other hand, depends on the image values themselves, so the weights change with the signal. That small distinction completely changes the operator. This was a surprising moment: signal processing was not just a set of filters, but a way of recognizing structure that changes what can be computed efficiently. I felt the same fascination when learning how CT reconstruction follows from the Fourier slice theorem, where the right representation makes a difficult imaging problem tractable.

My first PhD project made this shift practical. The project, accepted to IEEE TPAMI, involved acousto-optic imaging using programmable sound waves in water. I had to learn waveform generation, synchronization, triggering, and acousto-optic physics on a steep timeline. By driving designed acoustic signals through water, we controlled refractive index changes to create optical line profiles for scanning. This removed mechanical scanning components and enabled extremely high-speed imaging. The project showed me how signal synthesis and physical optics can combine to create new sensors.

I later contributed to an underwater optical backscatter communication project by building the waveform generation and hardware synchronization pipeline. This involved timing delays, Nyquist sampling, phase modulation, and phase-shift keying. My interest deepened further through an SDR-inspired LiDAR project, where carrier modulation, software-defined radio ideas, and quadrature demodulation were adapted for high-rate depth and vibration sensing.

I believe I deserve to be selected because signal processing has become central to my research direction and career goals. It transformed how I think about engineering: from writing software around sensors to designing the signals, measurements, and reconstruction algorithms themselves. I do not claim to have mastered the field; I have only begun to appreciate how much it offers. In the AI era, I do not see signal processing as outdated. I see it as more accessible, more necessary, and still underused in many imaging and sensing problems. My goal is to translate core signal-processing ideas into computational imaging, LiDAR, communication, and sensing systems, and to help researchers from adjacent fields recognize how much potential remains in signal processing.

---

## 4. Personal Statement

**word limit:** 500 words

In the next five years, I hope to complete my PhD and begin my career as a faculty member running a research lab at the intersection of signal processing, computational imaging, and sensing systems. My immediate goal is to build a research profile showing that signal processing is not only applied after data is captured, but can shape the entire sensing pipeline: the waveform, physical modulation, sensor measurement, and reconstruction algorithm.

My current internship at Bosch Research in Pittsburgh is shaping this direction. I am working on a sensing system for under-skin/subsurface imaging, where useful optical signals are weak, indirect, and affected by tissue scattering. This connects to diffuse optical tomography, where photon transport through tissue can be modeled using diffusion approximations. I am especially interested in how scattering models can sometimes be approximated as convolutional kernels, making the inverse problem more tractable. This experience strengthens my goal of building sensing systems that combine physical modeling, signal processing, and reconstruction algorithms to recover information from difficult real-world measurements.

In ten years, I hope to have built a growing research community around signal-processing-driven imaging and sensing. I want to teach undergraduates and graduate students to see signal processing not only as transforms, filters, and equations, but as a powerful engineering language for solving real problems. I am especially interested in teaching it in an inverted, application-driven way: starting from concrete systems such as LiDAR, ultrasound, cameras, communication links, and biomedical imaging, and then uncovering the signal-processing principles that make them work.

In twenty years, I hope my work has moved beyond fast scanning alone into broader sensing frontiers such as quantum imaging, SPAD-based sensing, two-photon microscopy, and low-light computational imaging. SPAD sensors are especially exciting because they produce rich time-resolved measurements, but also create major signal-processing challenges: high data throughput, tight synchronization, optimal illumination and coding strategies, readout design, photon pile-up, and reconstruction under photon-limited noise. I want to explore how signal processing at both acquisition and reconstruction stages can unlock new capabilities from these sensors. A long-term goal of my career is to build imaging systems that reveal phenomena previously too weak, too fast, or too indirect to observe.

Signal processing will remain the foundation of this future career. It gives me the language to connect software with physics. It explains why coherence matters, how a carrier encodes a message, how phase carries precise information, how sampling affects recovery, and how noise can be reduced through better measurement design.

I also want to share this perspective with students. Because I came from a software and graphics background, I understand how easy it is to treat signal processing as a distant or difficult field. I want to mentor students who may not initially see themselves as signal-processing researchers and help them realize how these tools can transform imaging, communication, robotics, and scientific measurement.

---

## 5. Your Activities

**word limit:** 500 words

My top achievements are centered on research, teaching, mentorship, presentations, reviewing, and engineering outreach.

**Research and signal-processing systems.** As a PhD student at Dartmouth, my first major PhD project, “Structured Light with a Million Light Planes per Second,” was accepted to IEEE TPAMI. I developed acousto-optic imaging hardware where programmable sound waves in water control optical line profiles for high-speed scanning. This required waveform generation, synchronization, triggering, calibration, and hardware experimentation, and it showed me how designed signals can replace mechanical motion and create new sensing capabilities.

I also co-first-authored “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering,” accepted to SIGGRAPH Asia / ACM TOG. I developed the waveform generation and synchronization pipeline for the communication system, including timing delays, triggers, Nyquist sampling, phase modulation, and phase-shift keying. This project made communication signal processing real to me: the theory had to work under hardware limits, water, alignment, and timing constraints.

My completed SDR-ToF project, currently under review, adapts carrier modulation, quadrature demodulation, and software-defined radio ideas to time-of-flight sensing, enabling million-depth-samples-per-second LiDAR and vibration recovery. My current internship at Bosch Research extends this commitment to under-skin/subsurface imaging, where weak scattered optical signals require physical modeling and computational reconstruction.

**Presentations and community building.** I have presented my work across vision, graphics, imaging, and computational photography communities, including the invited talk “From Rendering to Imaging: Controlling Light with Sound” at the New England Symposium on Graphics at MIT in 2026; “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering” at SIGGRAPH Asia 2025; “Structured Light with a Million Light Planes per Second” at ICCP 2025 and NECV 2025; and “Interactive Segmentation of Radiance Fields” at NECV 2023. These talks help generate interest in signal-processing ideas across adjacent fields.

**Teaching, mentoring, and outreach.** I have mentored students across career stages: Ava Carlson, a Dartmouth undergraduate; Saurish Gali, a junior high school student; Atul R. Agarwal, a Dartmouth graduate student; Atharv Agashe, a Dartmouth undergraduate; and Rahul Goel, an IIIT-H undergraduate. I have also served as a teaching assistant or mentor for Computational Photography, Computer Vision, Advanced Graphics AR/VR, Computer Graphics, and AI/ML projects. In Computational Photography, I received a High Pass for supervised undergraduate teaching. I have also participated in Dartmouth Science Day outreach, setting up demonstrations to encourage middle and high school students to pursue engineering.

**Awards and service.** I received a Guarini travel grant in 2024, reviewed for AAAI, ICVGIP, CVPR, and SIGGRAPH, was enlisted in the Roll of Honors as academically second in my undergraduate batch at JNTUK-UCEV, and was a Certified Programmer through MissionRnD.

---

## 6. Publications

**word limit:** 500 words

Yes.

Ramchander Bhaskara*, Dhawal Sirikonda*, Omkar Vengulekar*, Joseph Lazzaro, Juhyeon Kim, Suren Jayasuriya, and Adithya Pediredla. “SDR-ToF: Million Depth Samples per Second using Software-Defined Radio.” Under review. (*joint first author)

Atul Rohit Agarwal*, Dhawal Sirikonda*, Atharv Agashe, Ziang Ren, Dinithi Silva-Sassaman, Charles Carver, Alberto Quattrini Li, Xia Zhou, and Adithya Pediredla. “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering.” SIGGRAPH Asia / ACM Transactions on Graphics, 2025. (*joint first author)

Dhawal Sirikonda, Praneeth Chakravarthula, Ioannis Gkioulekas, and Adithya Pediredla. “Structured Light with a Million Light Planes per Second.” IEEE International Conference on Computational Photography / IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025.

Vinayak Gupta, Rahul Goel, Dhawal Sirikonda, and P. J. Narayanan. “GSN: Generalisable Segmentation in Neural Radiance Fields.” AAAI, 2024.

Rahul Goel*, Dhawal Sirikonda*, Saurabh Saini, and P. J. Narayanan. “Interactive Segmentation of Radiance Fields.” CVPR, 2023. (*joint first author)

Rahul Goel, Dhawal Sirikonda, Rajvi Shah, and P. J. Narayanan. “FusedRF: Fusing Multiple Radiance Fields.” XRNeRF CVPR Workshop, 2023.

Dhawal Sirikonda, Aakash KT, and P. J. Narayanan. “Real-Time Rendering of Arbitrary Surface Geometries using Learnt Transfer.” ICVGIP, 2022.

Rahul Goel*, Dhawal Sirikonda*, Saurabh Saini, and P. J. Narayanan. “StyleTRF: Stylizing Tensorial Radiance Fields.” ICVGIP, 2022. (*joint first author)

Dhawal Sirikonda and Aakash KT. “Learnt Transfer for Surface Geometries.” High Performance Graphics Poster, 2022.

Dhawal Sirikonda, Aakash KT, and P. J. Narayanan. “Transfer Textures for Fast Precomputed Radiance Transfer.” Eurographics Poster, 2022.

My recent PhD publications are closely connected to signal processing through acousto-optic imaging, waveform generation, synchronization, optical modulation, SDR-inspired LiDAR, and underwater communication. My earlier work in computer vision, graphics, radiance fields, and rendering provided the software and mathematical foundation for my current signal-processing-driven sensing research.

---

## 7. Lectures / Teaching

**word limit:** 500 words

Yes. I have served as a teaching assistant or mentor for several courses related to computational imaging, vision, graphics, and machine learning.

At Dartmouth, I served as a teaching assistant for COSC273 Computational Photography. This course is closely related to signal processing because it covers image formation, computational imaging, camera models, Fourier-domain reasoning, filtering, deconvolution, coded imaging, time-of-flight imaging, and reconstruction from optical measurements. As a TA, I helped students connect mathematical ideas with implementation, especially how images can be understood as measurements formed by optics, sensors, noise, and computational reconstruction. I received a High Pass for supervised undergraduate teaching in this role.

I have also served as a teaching assistant for Computer Vision at Dartmouth. This course relates to signal processing through image and video signals, feature extraction, stereo, geometry, 3D perception, and image-based inference. It strengthened my ability to explain how visual data can be processed to recover structure and meaning from measurements.

Before my PhD, at IIIT-Hyderabad, I served as a teaching assistant for Advanced Graphics AR/VR and Computer Graphics. These courses connected rendering, geometry, sampling, appearance modeling, and visual computation. Although they are often taught from a graphics perspective, they also relate strongly to signal processing because rendering and imaging both require understanding how visual signals are generated, sampled, transformed, and reconstructed.

In addition to formal teaching, I have mentored students including Ava Carlson, Saurish Gali, Atul R. Agarwal, Atharv Agashe, Rahul Goel, and others across computational imaging, graphics, communication, and sensing projects. Some of this mentoring involved signal-processing topics such as quadrature modulation, demodulation, BPSK, synchronization, and waveform generation.

Teaching and mentoring have helped me see how students from computer science and graphics backgrounds can initially view signal processing as distant or abstract. My goal as a teacher is to make these ideas concrete through imaging, LiDAR, communication, and sensing examples.

---

## 8. Career Experience

**word limit:** 500 words

I am currently interning at Bosch Research in Pittsburgh, where I am building a sensing system for an under-skin/subsurface imaging project. This internship is directly related to my major and academic focus because it involves computational imaging, sensor design, signal acquisition, and reconstruction from weak optical measurements affected by scattering. The project connects to diffuse optical tomography, where photon transport through tissue can be modeled using diffusion approximations. I am particularly interested in how complex scattering behavior can sometimes be approximated using convolutional kernels, making the inverse problem more computationally tractable. This experience is helping me understand how signal-processing ideas can be translated into applied sensing systems outside the university environment.  
**Internship duration:** Summer 2026.

My main academic career preparation has also come through research at Dartmouth and prior graduate research at the International Institute of Information Technology Hyderabad. At Dartmouth, I am a PhD candidate in the Rendering and Imaging Science Lab, working with Prof. Adithya Pediredla. My work involves hardware and algorithm development for novel imaging and sensing systems, including acousto-optic imaging, LiDAR, optical communication, event-enhanced sensing, RGB-D sensors, and computational imaging through challenging media. This research has served as direct preparation for signal-processing engineering because it requires building working systems, generating and synchronizing signals, handling real sensors, analyzing noisy measurements, and designing reconstruction methods.

Before starting my PhD, I completed my master’s research with Prof. P. J. Narayanan at IIIT Hyderabad, where I worked at the intersection of computer vision, 3D vision, real-time graphics, appearance modeling, radiance fields, and visual computing. This experience gave me a strong foundation in software, algorithms, and visual data, which later helped me transition into computational imaging and signal-processing-driven sensing during my PhD.

---

## 9. Detailed Signal Processing Engineering Experience

**word limit:** 300 words

Not applicable — this is a new application.

Although this is not a renewal application, my current PhD research and industry internship already involve substantial signal-processing engineering experience. At Bosch Research in Pittsburgh, I am working on under-skin/subsurface imaging, where weak optical signals must be recovered from scattering media. This involves physical modeling, diffusion approximations, convolutional interpretations of scattering, and computational reconstruction.

In my PhD research, I have worked on acousto-optic imaging systems that require waveform generation, synchronization, triggering, and physical modulation of light using sound waves in water. I have also worked on underwater optical backscatter communication, involving timing, Nyquist sampling, phase modulation, BPSK, synchronization, and signal recovery under challenging physical conditions. In another direction, I have explored SDR-inspired LiDAR, where carrier modulation and quadrature demodulation are adapted for high-speed depth sensing and vibration measurement.

Across these projects, I work with both the acquisition and reconstruction sides of signal processing: designing signals, building hardware pipelines, collecting real measurements, handling noise and synchronization, and recovering information from indirect or weak physical signals.

---

## 10. Other Opportunities to Learn About Signal Processing Engineering Careers

**word limit:** 200 words

Not applicable — this is a new application.

However, I have actively pursued opportunities to learn about signal-processing-related research careers through conferences, workshops, invited talks, seminars, teaching, mentoring, and reviewing. I presented “Structured Light with a Million Light Planes per Second” at ICCP 2025 and NECV 2025, “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering” at SIGGRAPH Asia 2025, and “Interactive Segmentation of Radiance Fields” at NECV 2023. I also gave the invited talk “From Rendering to Imaging: Controlling Light with Sound” at the New England Symposium on Graphics at MIT in 2026.

These opportunities helped me communicate signal-processing-driven imaging and communication work to broader communities in computational photography, graphics, computer vision, and sensing. I have also reviewed for AAAI, ICVGIP, CVPR, and SIGGRAPH, which helped me understand research standards across related communities. Through teaching and mentoring, I have worked with students on computational photography, computer vision, graphics, AI/ML, and communication/sensing concepts such as modulation and demodulation.

---

## Optional Academic Explanation

Use this only if the application has a separate explanation box. Do not include it in the main essays unless asked.

Spring 2025 included an isolated NC entry carrying 0 credits during an unusually demanding research period with a major publication deadline and unavoidable scheduling conflicts. It is not representative of my overall graduate record, which otherwise consists of Pass and High Pass grades, including High Passes in research, teaching, and visual computing coursework.
