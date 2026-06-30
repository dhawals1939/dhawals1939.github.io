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

---

## 1. SPS Scholarship Funding

**Prompt:** Please describe why you are seeking funding. Be as specific as possible.  
**word limit:** 250

I work at the intersection of computational imaging, signal processing, optics, acoustics, and sensing hardware. My research aims to build sensing systems that create new capabilities by designing the physical signal, the hardware measurement, and the reconstruction algorithm together. This work is hardware-intensive: it requires photonics equipment, acoustic components, RF and data-acquisition hardware, calibration tools, sensors, and precise triggering/synchronization electronics.

SPS Scholarship funding would directly support hands-on experimentation. In this kind of research, progress often comes through multiple design iterations: testing transducers, digitizers, optical components, synchronization electronics, and signal-generation hardware before a system works reliably. For example, in my SDR-ToF LiDAR work, access to software-defined radio hardware enabled us to test a practical RF/DSP path for high-speed optical sensing. Similar hardware access is essential for my work in acousto-optic scanning, underwater optical communication, and subsurface imaging.

If permitted through my institution, I would use the scholarship to support hardware acquisition and experimental development for imaging and sensing systems. I would also use it to attend signal-processing-focused conferences, tutorials, and workshops such as ICASSP, ICIP, ICCP, and relevant IEEE/CVF workshops. Beyond direct research support, SPS funding would help me stay connected to the signal processing community and share these ideas through small outreach demonstrations that introduce students to sensing, optics, and signal processing.

---

## 2. Signal Processing Courses

**Prompt:** Please list at least three signal processing related courses that you have taken or expect to take. Include course names, numbers, terms, and how they relate to your major or signal processing interests.

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

**Prompt:** Explain how your personal interests and career goals have been impacted by your interest in engineering. Explain why you feel you deserve to be selected as an SPS Scholarship recipient, where you see yourself in the future, and how you became interested in signal processing as opposed to other fields.  
**word limit:** 500 words

<!-- My interest in signal processing grew from a practical engineering question: can we build sensing systems that create new capabilities at lower cost by designing the physical signal itself? My background was originally in software engineering, computer vision, and real-time graphics. I was used to treating images as data after capture. During my PhD research, I began to see sensing differently: the signal can be designed before measurement, shaped by physics during propagation, and recovered through computation afterward.

One early moment that changed my thinking was seeing how structure in a signal changes what can be computed. In the spatial domain, Gaussian blur and bilateral filtering may both look like local averaging. But Gaussian blur is shift-invariant: the same kernel applies everywhere, so it can be accelerated through separability or Fourier-domain multiplication. Bilateral filtering depends on image values, so the weights change with the signal. That distinction showed me that signal processing is not only a collection of filters; it is a way of recognizing structure that changes what is possible.

My first PhD project made this insight physical. We wanted to build a scanner without mechanical friction or inertia. Instead of moving mirrors, we used sound waves in water to program refractive-index patterns that steer light and create optical line profiles. But programmable refractive media are only useful when the acoustic waveform sent to the transducer is carefully designed, synchronized with the camera, and calibrated against the optical output. This project taught me acousto-optics, laboratory prototyping, waveform design, synchronization, and testing. More importantly, it showed me that signal processing can be part of the sensor itself, not just a post-processing step.

I later worked on underwater optical backscatter communication using acousto-optic beam steering. That project taught me how communication ideas become real systems: timing, phase, modulation, sampling, and synchronization all had to work under water, alignment, and hardware constraints. My SDR-ToF LiDAR work extended this direction by bringing radio-frequency thinking into optical sensing. Carrier modulation, quadrature demodulation, high-speed digitization, and DSP pipelines enabled depth and vibration sensing from optical measurements.

I believe I deserve to be selected because signal processing has become the organizing principle of my research direction. It connects my software background to physical sensing systems, and it gives analytical grounding to the AI and reconstruction algorithms we build. In the AI era, I see signal processing as a core foundation for future sensing systems: it explains what should be measured, how it should be encoded, what information is recoverable, and how computation can reconstruct it. My goal is to build imaging, LiDAR, communication, and biomedical sensing systems where signal processing expands what sensors can do. -->
The idea that pulled me into signal processing was that computation can change what a sensor measures, not just improve the data after capture. To me, this is the central idea of computational imaging: use coding, modulation, timing, optics, and reconstruction during sensing so that a camera or sensor can measure something it otherwise could not.

I came to this through an unconventional path. My earlier background was in software engineering, computer vision, and real-time graphics, where I mostly treated images as data produced by a camera. During my PhD, I began to see sensing differently. An image is not just an array of pixels; it is the result of illumination, propagation, physical interaction, sampling, noise, synchronization, and reconstruction. Once I saw that the measurement itself could be designed, signal processing became the field that connected my software background to physical systems.

My first PhD project made this concrete. We wanted to scan light without mechanical friction or inertia. Instead of moving mirrors, we drove a transducer to send sound waves through water. The pressure variations from sound created refractive-index patterns, and those patterns steered light to form optical line profiles. The exciting idea was a programmable optical medium. But realizing it required signal processing: designing the acoustic waveform, controlling timing, synchronizing the sound field with the light passing through the medium, and calibrating the optical response. Signal processing was not a post-processing step; it was what made the sensor programmable during capture.

I saw the same pattern in underwater optical backscatter communication. Acousto-optic beam steering could move light, but turning it into a communication system required waveform design, bit timing, phase modulation, delay control, Nyquist sampling, and synchronization under underwater and hardware constraints. In SDR-ToF LiDAR, we explored how software-defined radio ideas could create an optical sensing system capable of recovering sub-millimeter vibrations. Carrier mixing and unmixing, quadrature demodulation, ADC sampling, SNR analysis, and optical signal modeling were not separate from sensing; they were intertwined with the illumination and measurement process.

These experiences made signal processing central to my career goals. I am excited by engineering because it lets abstract ideas become physical systems. I believe I deserve to be selected because my work uses signal processing in the way SPS values deeply: not only as mathematical analysis, but as a practical tool for building imaging, LiDAR, communication, and biomedical sensing systems.

In the AI era, I do not see signal processing as outdated. I see it as the foundation that tells us what should be measured, how it should be encoded, what information is recoverable, and how reconstruction or learning should be constrained. My goal is to build sensing systems where signal processing expands what sensors can do during capture itself.

---

## 4. Personal Statement

**Prompt:** Where do you see yourself in 5, 10, or 20 years? How will you use signal processing in your future career?  
**word limit:** 500 words

My immediate career goal is to build an academic research career around computational imaging, where signal processing is used not only after capture but during the sensing process itself. As I move from my third year toward completing my PhD, I want to finish a strong body of work showing that new sensors can be built by designing the physical measurement, waveform, timing, and reconstruction algorithm together. After the PhD, I plan to continue toward a faculty-track path, using any postdoctoral or research-scientist stage to deepen this direction.

My PhD projects have shaped this goal. In acousto-optic imaging, the problem is to scan light without mechanical friction or inertia. We drive a transducer to send sound waves through water; their pressure variations create refractive-index patterns that steer light. But the system works only when the acoustic waveform is designed and synchronized with the light passing through the medium. Here, signal processing is not just post-capture cleanup; it creates the programmable optical medium.

In underwater optical backscatter communication, the same acousto-optic principle becomes a communication system. The challenge is not only to steer light, but to encode information reliably through waveform design, bit transitions, timing delays, Nyquist sampling, phase modulation, and synchronization. In SDR-ToF LiDAR, we explored how software-defined radio can build a LiDAR system capable of sensing sub-millimeter vibrations. Its core principle is carrier mixing and unmixing: illumination and sensing are closely coupled, and the signal-processing pipeline is intertwined with the optical measurement. These projects convinced me that future sensing systems will come from better choices about how signals are generated, encoded, sampled, synchronized, and reconstructed.

In the next few years, I want to complete my PhD by building these projects into a coherent research direction: computational imaging systems where signal processing shapes the measurement itself. I am also extending this idea beyond fast scanning and communication into imaging through scattering media. In my work on under-skin/subsurface imaging at Bosch Research, tissue scattering makes optical signals weak and indirect, so the sensing problem depends on physical modeling, diffusion approximations, convolutional interpretations of scattering, and inverse reconstruction. As a future faculty member, I want to establish a lab that pursues computational imaging in this broader sense: using signal processing as part of sensing, not merely as image enhancement after capture.

In ten years, I aim to lead a research group working across computational imaging, LiDAR, communication, biomedical sensing, and systems where physics, electronics, and computation meet. I also want to teach signal processing through applications: cameras, ultrasound, LiDAR, communication links, and medical imaging first, then the principles of sampling, modulation, filtering, phase, noise, and reconstruction behind them.

Longer term, I want to train engineers who can solve contemporary sensing problems while remaining grounded in physics. I am especially excited by future single-photon-sensitive and quantum-level imaging systems. As sensors improve, I hope to help image physical phenomena currently too weak, too fast, or too indirect to observe, turning ideas that may now exist in theory into working measurement systems.


---

## 5. Your Activities

**Prompt:** List your top achievements and/or awards. Information on volunteer or employment experience is also helpful.  
**word limit:** 500 words

My top achievements are centered on building signal-processing-driven sensing systems, mentoring students, and engineering outreach.

**Research and system building.** I built a high-speed optical scanner that avoids mechanically moving mirrors by using sound to steer light. In this system, a transducer sends programmable sound waves through water; the resulting pressure variations create refractive-index patterns that steer light and generate optical line profiles. I developed the acousto-optic imaging hardware and worked on waveform generation, synchronization, triggering, calibration, and experimental testing. This work, “Structured Light with a Million Light Planes per Second,” was accepted to IEEE TPAMI / ICCP. It showed me that signal processing can shape the sensing process itself, not just improve measurements afterward.

I also worked on an underwater optical communication system where acousto-optic beam steering is used to modulate and redirect light in water. I developed the waveform generation and synchronization pipeline, including timing delays, triggers, sampling, phase modulation, and phase-shift keying. This work connected physical beam steering with communication signal processing under underwater and hardware constraints. The project, “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering,” was accepted to SIGGRAPH Asia / ACM TOG, and I am a joint first author.

My completed SDR-ToF project explores how software-defined radio ideas can be used for optical time-of-flight sensing. By using carrier mixing and unmixing, quadrature demodulation, ADC sampling, and SNR analysis, the system enables million-depth-samples-per-second LiDAR and sub-millimeter vibration sensing. This work is currently under review. My current internship at Bosch Research extends this direction to under-skin/subsurface imaging, where weak scattered optical signals require physical modeling and computational reconstruction.

**Presentations and community building.** I have presented my work across computational photography, computer vision, graphics, and imaging communities. My presentations include the invited talk “From Rendering to Imaging: Controlling Light with Sound” at the New England Symposium on Graphics at MIT in 2026; “Underwater Optical Backscatter Communications using Acousto-Optic Beam Steering” at SIGGRAPH Asia 2025; “Structured Light with a Million Light Planes per Second” at ICCP 2025 and NECV 2025; and “Interactive Segmentation of Radiance Fields” at NECV 2023. These talks help bring signal-processing ideas to adjacent fields.

**Teaching, mentoring, and outreach.** I have mentored students across career stages, including Ava Carlson, a Dartmouth undergraduate; Saurish Gali, a junior high school student; Atul R. Agarwal, a Dartmouth graduate student; Atharv Agashe, a Dartmouth undergraduate; and Rahul Goel, an IIIT-H undergraduate. I have served as a teaching assistant or mentor for Computational Photography, Computer Vision, Advanced Graphics AR/VR, Computer Graphics, and AI/ML projects. In Computational Photography, I received a High Pass for supervised undergraduate teaching. I also participated in Dartmouth Science Day outreach, setting up demonstrations to encourage middle and high school students to pursue engineering.

**Awards and service.** I received a Guarini travel grant in 2024, contributed to patent applications/disclosures related to novel imaging and communication, reviewed for AAAI, ICVGIP, CVPR, NeurIPS, and SIGGRAPH, was listed on the Roll of Honors as academically second in my undergraduate batch at JNTUK-UCEV, and was a Certified Programmer through MissionRnD.

---

## 6. Publications

**Prompt:** Have you published any papers, conference papers, etc.? If yes, please include the citation.  
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

**Prompt:** As part of your degree, have you lectured or are you currently teaching/lecturing a course related to signal processing? If yes, please provide the name and a description of the course.  
**word limit:** 500 words

Yes. I have served as a teaching assistant or mentor for several courses related to computational imaging, vision, graphics, and machine learning.

At Dartmouth, I served as a teaching assistant for COSC273 Computational Photography. This course is closely related to signal processing because it covers image formation, computational imaging, camera models, Fourier-domain reasoning, filtering, deconvolution, coded imaging, time-of-flight imaging, and reconstruction from optical measurements. As a TA, I helped students connect mathematical ideas with implementation, especially how images can be understood as measurements formed by optics, sensors, noise, and computational reconstruction. I received a High Pass for supervised undergraduate teaching in this role.

I have also served as a teaching assistant for Computer Vision at Dartmouth. This course relates to signal processing through image and video signals, feature extraction, stereo, geometry, 3D perception, and image-based inference. It strengthened my ability to explain how visual data can be processed to recover structure and meaning from measurements.

Before my PhD, at IIIT-Hyderabad, I served as a teaching assistant for Advanced Graphics AR/VR and Computer Graphics. These courses connected rendering, geometry, sampling, appearance modeling, and visual computation. Although they are often taught from a graphics perspective, they also relate strongly to signal processing because rendering and imaging both require understanding how visual signals are generated, sampled, transformed, and reconstructed.

In addition to formal teaching, I have mentored students including Ava Carlson, Saurish Gali, Atul R. Agarwal, Atharv Agashe, Rahul Goel, and others across computational imaging, graphics, communication, and sensing projects. Some of this mentoring involved signal-processing topics such as quadrature modulation, demodulation, BPSK, synchronization, and waveform generation.

Teaching and mentoring have helped me see how students from computer science and graphics backgrounds can initially view signal processing as distant or abstract. My goal as a teacher is to make these ideas concrete through imaging, LiDAR, communication, and sensing examples.

---

## 8. Career Experience

**Prompt:** Describe any career experience outside of your university, including internships or time spent at other universities.  
**word limit:** 500 words

I am currently interning at Bosch Research and Technology Center in Pittsburgh, where I am working on a sensing system for under-skin/subsurface imaging. This internship is directly related to my major and academic focus because it involves computational imaging, sensor design, signal acquisition, and reconstruction from weak optical measurements affected by scattering. The project connects to diffuse optical tomography, where photon transport through tissue can be modeled using diffusion approximations. I am particularly interested in how complex scattering behavior can sometimes be approximated using convolutional kernels, making the inverse problem more computationally tractable.  
**Internship duration:** Summer 2026.

My research experience at Dartmouth College also prepares me for a signal-processing engineering career. In the Rendering and Imaging Science Lab, working with Prof. Adithya Pediredla, I build hardware and algorithms for acousto-optic imaging, LiDAR, optical communication, event-enhanced sensing, RGB-D sensing, and computational imaging through challenging media. This work requires building physical systems, generating and synchronizing signals, handling real sensors, analyzing noisy measurements, and designing reconstruction methods.

Before starting my PhD, I completed my master’s research with Prof. P. J. Narayanan at the International Institute of Information Technology Hyderabad. I worked at the intersection of computer vision, 3D vision, real-time graphics, appearance modeling, radiance fields, and visual computing. This experience gave me the software, mathematical, and visual-computing foundation that later helped me transition into computational imaging and signal-processing-driven sensing.
