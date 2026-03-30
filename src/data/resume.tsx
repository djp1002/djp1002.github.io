import { Icons } from "@/components/icons";
import { HomeIcon, FolderKanban, BookOpen } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Gazebo } from "@/components/ui/svgs/gazebo";
import { ST } from "@/components/ui/svgs/st";
import { Nvidia } from "@/components/ui/svgs/nvidia";
import { ClassicalControl } from "@/components/ui/svgs/classicalcontrol";
import { OptimalControl } from "@/components/ui/svgs/optimalcontrol";
import { RL } from "@/components/ui/svgs/rl";
import { C } from "@/components/ui/svgs/c";
import { Cpp } from "@/components/ui/svgs/cpp";

export const DATA = {
  name: "Darshankumar Prajapati",
  initials: "DP",
  url: "https://djp1002.github.io",
  location: "Mandi, HP, India",
  locationLink: "https://maps.app.goo.gl/1BMv9XLTZUb8Z2PH9",
  description:
    "I build things that move. Robots, ideas, systems, living or not. Legged Robotics, Dynamics, Perception & Control, Reinforcement Learning",
  summary:
    "M.Tech (Research) Scholar at IIT Mandi’s Centre for AI and Robotics, specializing in legged systems, optimal control, and sim-to-real reinforcement learning. My thesis focuses on autonomous multi-terrain navigation for heterogeneous UAV–quadruped coordination in industrial environments. I work on dynamic modeling, MPC-based quadruped control, RL-driven dual-arm manipulation, and dynamic biped locomotion, integrating perception, planning, and control into cohesive multi-robot frameworks. Building robots that respect dynamics before they learn to bend them.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "ROS", icon: Icons.ROS },
    { name: "ROS 2", icon: () => <img src="/ros2.png" alt="ROS 2" className="size-6 brightness-0 dark:brightness-0 dark:invert"/> },
    { name: "Gazebo", icon: Gazebo },
    { name: "Isaac Sim", icon: () => <img src="/isaacsim.png" alt="Isaac Sim" className="size-6"/> },
    { name: "Embedded Systems", icon: ST },
    { name: "Edge Systems", icon: Nvidia },
    { name: "Classical Control", icon: ClassicalControl },
    { name: "Optimal Control", icon: OptimalControl },
    { name: "Reinforcement Learning", icon: RL },
    { name: "Python", icon: Python },
    { name: "C", icon: C },
    { name: "C++", icon: Cpp },
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
    { href: "/publications", icon: BookOpen, label: "Publications" },
    // { href: "/blog", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "djprajapati.1002@gmail.com",
    tel: "+91 9104030970",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/djp1002",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/darshankumar-prajapati/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:djprajapati.1002@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IIT Mandi",
      href: "https://www.iitmandi.ac.in/",
      badges: [],
      location: "Mandi, Himachal Pradesh",
      title: "Teaching Assistant",
      logoUrl: "/iitmandi.png",
      start: "Mar 2023",
      end: "Feb 2026",
      description:
        "Supervised undergraduate research projects in robotics and mechanical systems. Conducted laboratory sessions for Design Practicum, and Robot Kinematics & Dynamics. Conducted technical and hands-on sessions on robotics and drone systems for 100+ students. Conducted 3-day robotics workshop for 40+ faculty across institutions under the Faculty Development Program",
    },

    {
      company: "IIT Bhilai",
      href: "https://www.iitbhilai.ac.in/",
      badges: [],
      location: "Bhilai, Chhattisgarh",
      title: "Robotics Research Intern ",
      logoUrl: "/iitbhilai.png",
      start: "July 2022",
      end: "Feb 2023",
      description:
        "Designed and developed Micromouse robot encompassing hardware, software, and control systems. Built UGV pick-and-place system integrating mechanical design, embedded programming, and motion control",
    },
    {
      company: "OSVIPL",
      href: "https://www.linkedin.com/company/om-siddh-vinayak-impex-pvt-ltd/?originalSubdomain=in",
      badges: [],
      location: "Gandhidham, Gujarat",
      title: "Automation Intern",
      logoUrl: "/osvipl.jpg",
      start: "Apr 2021",
      end: "Sep 2021",
      description:
        "Developed automation system for clothes donation bin collection and sorting. Designed cloth transport mechanism using belt-drive systems",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology Mandi",
      href: "https://www.iitmandi.ac.in/",
      degree: "Master of Technology (Research) - Robotics and AI",
      logoUrl: "/iitmandi.png",
      start: "Mar 2023",
      end: "Feb 2026",
    },
    {
      school: "Marwadi University",
      href: "https://www.marwadiuniversity.ac.in/",
      degree: "Bachelor of Technology - Mechanical Engineering",
      logoUrl: "/mu.png",
      start: "July 2017",
      end: "June 2021",
    },
  ],
  projects: [
    {
      id: "uav-quadruped",
      publicationIds: ["mppf", "reference-coupled"],
      title: "Autonomous Multi-Terrain Navigation Framework for Heterogeneous UAV - Quadruped Coordination in Industrial Environments",
      href: "https://ieeexplore.ieee.org/document/11358968",
      dates: "Mar 2024 - Jan 2026",
      active: true,
      description:
        "This research project focuses on developing a coordinated search operation utilizing a UAV and a quadruped. The UAV is tasked with creating a global map of the environment, identifying different types of terrain. This terrain information is then communicated to the quadruped robot, which adapts its locomotion mode accordingly to navigate the environment efficiently. The project aims to integrate visual servoing techniques with legged robotic systems, enabling the quadruped to traverse diverse terrains autonomously and effectively during search and rescue missions.",
      technologies: [
        "Visual Servoing", 
        "Legged Robot", 
        "Pathplanning", 
        "Deep Learning", 
        "OpenCV", 
        "ROS", 
        "Jetson Orin",
      ],
      links: [
        {
          type: "Project Link",
          href: "https://ieeexplore.ieee.org/document/11358968",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pub_pro_img/mppf_overview_comp.jpg",
      video:
        "https://youtu.be/ot43SBMGWPo",
    },
    {
      id: "tiltrotor",
      publicationIds: ["tiltrotor"],
      title: "Fully Actuated Tiltrotor UAV for Improved Gust Rejeection (",
      href: "https://ieeexplore.ieee.org/abstract/document/10949562",
      dates: "Mar 2024 - Aug 2025",
      active: true,
      description:
        "Developing a custom, fully actuated tilt quadrotor UAV capable of precise hovering and path tracking at any angle. With its six degrees of freedom, the system can outperforms conventional quadrotors in high wind conditions, making it ideal for search and rescue missions.",
      technologies: [
        "ROS",
        "Optimal Controller",
        "STM32",
        "ICM20948",
        "PWM",
        "SPI",
        "Servo and BLDC motors",
      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/abstract/document/10949562",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://ieeexplore.ieee.org/abstract/document/10949562",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pub_pro_img/tiltrotor.jpg",
      video: "https://www.youtube.com/shorts/NK-A0Zvofsg",
    },
    
  ],
  authors: [
    { id: "djp", name: "Darshankumar Prajapati", scholar: "https://scholar.google.com/citations?user=PpronkIAAAAJ&hl=en", image: "/authors/darshan.jpg" },
    { id: "spsk", name: "Surya Prakash S.K", scholar: "https://scholar.google.com/citations?user=NJhUjFQAAAAJ&hl=en", image: "/authors/surya.jpg" },
    { id: "ankit", name: "Ankit Mehra", scholar: "https://scholar.google.com/citations?user=gm6-YM0AAAAJ&hl=en", image: "/authors/ankit.jpg" },
    { id: "jagannath", name: "Jagannath Prasad Sahoo", scholar: "https://scholar.google.com/citations?user=o8FPbNMAAAAJ&hl=en", image: "/authors/jagannath.jpg" },
    { id: "karan", name: "Karan Raj Pant", scholar: "https://scholar.google.com/citations?user=E9-hidIAAAAJ&hl=en", image: "" },
    { id: "amit", name: "Amit Shukla", scholar: "https://scholar.google.com/citations?user=pjJwY5oAAAAJ&hl=en", image: "/authors/amit.jpg" },
    { id: "pushkar", name: "Pushkar Kumar", scholar: "https://scholar.google.com/citations?user=bXCTqyMAAAAJ&hl=en", image: "/authors/pushkar.jpg" },
    { id: "ashish", name: "Ashish Rana", scholar: "https://scholar.google.com/citations?user=XeFww4wAAAAJ&hl=en", image: "/authors/ashish.jpg" },
    { id: "bhuvan", name: "Bhuvan Narula", scholar: "https://scholar.google.com/citations?user=g_Bea5IAAAAJ&hl=en", image: "" },
    { id: "tushar", name: "Tushar Patil", scholar: "", image: "" },
    { id: "abhay", name: "Abhay Dwivedi", scholar: "", image: "" },
    { id: "treddy", name: "T Reddy", scholar: "", image: "" },
    { id: "urvashi", name: "Urvashi Goswami", scholar: "https://scholar.google.com/citations?user=6AH5YeYAAAAJ&hl=en", image: "/authors/urvashi.jpg" },
  ],


  publications: [
    {
      id: "mppf",
      projectId: "uav-quadruped",
      image: "/pub_pro_img/mppf_overview_comp.jpg",
      video: "https://youtu.be/ot43SBMGWPo",
      title: "MPPF: Mobile Probe Potential Field for Real-Time Multi-Agent Navigation in Industrial Environments",
      venue: "IEEE Access",
      year: "2026",
      authors: ["djp", "ankit", "pushkar", "ashish", "spsk", "amit"],
      doi: "https://doi.org/10.1109/ACCESS.2026.3655886",
      abstract: "Industrial inspection in open outdoor unstructured multi-terrain environments creates critical autonomous navigation challenges. Ground agents required for manipulation and close inspection cannot achieve the comprehensive environmental perception necessary for safe autonomous operation, requiring multi-agent collaboration. This necessitates parallel processing of collaborative tasks, including trajectory planning, perception, real-time dynamic obstacle detection, and avoidance on resource-constrained edge devices. Terrain variations further demand adaptive locomotion strategies, necessitating legged robot deployment with adaptive gait patterns. To address these challenges, we propose a collaborative multi-agent framework where a autonomous aerial vehicles (AAV) provides environmental perception, localization, and dynamic obstacle detection through RGB-D cameras, utilizing deep learning for RGB processing and classical vision for depth analysis. The quadruped receives real-time guidance while executing terrain-adaptive locomotion with adaptive gait transitions. For efficient trajectory planning under computational constraints, we present MPPF (Mobile Probe Potential Field), a moving surface charge model for obstacle representation in APF methods. Our algorithm incorporates a virtual obstacle-based framework for local minima resolution and smooth trajectory generation through dynamic parameter adaptation. Experimental validation of our proposed framework demonstrates trajectory generation in 0.025 seconds with superior smoothness compared to baseline methods, achieving successful navigation across sand, stairs, and stones for autonomous industrial inspection in unstructured environments.",
      tags: ["Multi-Agent", "Navigation", "Quadruped", "UAV", "Industrial Inspection", "Potential Fields", "Real-Time", "Edge Computing"],
    },

    {
      id: "reference-coupled",
      projectId: "uav-quadruped",
      image: "/pub_pro_img/LQR_coupled.png",
      video: "https://youtu.be/tNEV3UJZ34Y",
      title: "Reference-Coupled Heterogeneous Multi-Agent Coordination with Real-Time Adaptive Perimeter Field Navigation",
      venue: "ICARA",
      year: "2026",
      authors: ["djp", "pushkar", "spsk", "ankit",  "ashish", "jagannath", "treddy", "amit"],
      doi: "",
      abstract: "Autonomous industrial inspection in unstructured environments requires coordinated UAV-ground systems for aerial perception and ground-level task execution. Coordinating Heterogeneous 3D aerial and 2D ground dynamics requires control frameworks with adaptable coordination strategies. Existing decoupled or fixed hierarchical approaches lack optimal coordination and runtime strategy adaptability. This work presents a reference-coupled Linear Quadratic Regulator (LQR) framework with parameterized coordination achieving optimal state synchronization across heterogeneous 3D aerial and 2D ground dynamics. The formulation enables continuous coordination strategies from leader-follower to symmetric modes via single-parameter adjustment, with adaptive altitude control maintaining perception coverage. For real-time trajectory generation, we introduce APFNav (Adaptive Perimeter Field Navigation) employing moving perimeter charge representation with 0.012 s computational latency. The system integrates RGB-D perception, deep learning terrain classification, and vision-based state estimation. Multiterrain experiments confirm successful autonomous navigation with terrain-adaptive locomotion, establishing the viability of reference-coupled LQR coordination for heterogeneous multiagent systems in resource-constrained embedded deployment.",
      tags: ["Multi-Agent", "Quadruped", "UAV", "Industrial Inspection", "Real-Time", "Edge Computing", "LQR", "Adaptive Control", "Heterogeneous Systems", "Reference-Coupling"],
    },
    {
      id: "pixels_pursuit",
      projectId: "",
      image: "/pub_pro_img/pixels.jpg",
      video: "https://www.youtube.com/watch?v=WnPe1OE8H4k&list=PL6SiUj2VGnRzmon_hSX_hfLP0CkzzldRh&index=8",
      title: "Pixels to Pursuit: Reinforcement Learning-based Control Strategies for UAV-AGV Collaborative Systems",
      venue: "ICMRE",
      year: "2026",
      authors: ["ankit", "djp", "pushkar",  "ashish", "urvashi", "amit"],
      doi: "",
      abstract: "Heterogeneous multi-agent collaborative systems have gained significant attention for it’s potential to enhance efficiency and autonomy in various safety surveillance and rescue operations. Tracking motion between Unmanned Aerial Vehicle (UAV) and Autonomous Ground Vehicle (AGV), landing of UAV over AGV are fundamental collaborative tasks. Tracking a UAV using an AGV presents greater challenges compared to tracking an AGV with a UAV. This is primarily due to the AGV’s limited spatial maneuverability. Vision-based tracking of a UAV by an AGV is considered in this work to conduct a comparative study of three distinct control strategies: Proportional-Integral-Derivative (PID) controllers, Sliding Mode Controllers (SMC), and Reinforcement Learning (RL)-based controllers, applied to a UAV-AGV multi-agent collaborative system. The primary objective is to evaluate the performance, robustness, and adaptability of these controllers in managing the complex dynamics and interactions between UAVs and AGVs during collaborative tasks. Our proposed methodology incorporates deep learning-based UAV detection. Autonomous vision-based control for AGV is developed, guided by the extracted image features. We present experimental validation of PID, SMC, and RL-based control for the AGV in outdoor conditions. The experimental results are discussed for performance analysis of the approach. This comparative analysis provides valuable insights into selecting appropriate control strategies for UAV-AGV systems, advancing autonomous multi-agent operations across various applications. ",
      tags: ["Multi-Agent", "UAV", "Real-Time", "Edge Computing", "Heterogeneous Systems", "Reinforcement Learning", "PID Control", "Sliding Mode Control"],
    },
    {
      id: "iapf",
      projectId: "",
      image: "/pub_pro_img/iapf.jpg",
      video: "https://youtu.be/aderCNr3H6k",
      title: "iAPF: an improved artificial potential field framework for asymmetric dual-arm manipulation with real-time inter-arm collision avoidance",
      venue: "Frontiers in Robotics and AI",
      year: "2025",
      authors: ["spsk", "djp", "bhuvan", "amit"],
      doi: "https://doi.org/10.3389/frobt.2025.1604506",
      abstract: "This paper presents a robust vision-based motion planning framework for dual-arm manipulators that introduces a novel three-way force equilibrium with velocity-dependent stabilization. The framework combines an improved Artificial Potential Field (iAPF) for linear velocity control with a Proportional-Derivative (PD) controller for angular velocity, creating a hybrid twist command for precise manipulation. A priority-based state machine enables human-like asymmetric dual-arm manipulation. Lyapunov stability analysis proves the asymptotic convergence to desired configurations. The method introduces a computationally efficient continuous distance calculation between links based on line segment configurations, enabling real-time collision monitoring. Experimental validation integrates a real-time vision system using YOLOv8 OBB that achieves 20 frames per second with 0.99/0.97 detection accuracy for bolts/nuts. Comparative tests against traditional APF methods demonstrate that the proposed approach provides stabilized motion planning with smoother trajectories and optimized spatial separation, effectively preventing inter-arm collisions during industrial component sorting.",
      tags: ["Real-Time", "Dual-Arm Manipulation", "Artificial Potential Fields", "Collision Avoidance", "Vision-Based Control", "Dual-Arm Manipulators", "Industrial Automation"],
    },
    {
      id: "underactuated-biped",
      projectId: "",
      image: "/pub_pro_img/underactuated_biped.jpg",
      video: "",
      title: "Learning Multi-Skill Locomotion in Underactuated Biped: A Waypoint-Based Reward Shaping Approach",
      venue: "ICC",
      year: "2025",
      authors: ["jagannath","spsk", "djp", "karan", "abhay", "amit"],
      doi: "https://doi.org/10.1109/ICC69100.2025.11372287",
      abstract: "This paper presents a comprehensive benchmarking framework for multi-skill bipedal locomotion learning using deep reinforcement learning with progressive waypoint-based reward shaping. We introduce the Skills–Algorithms–Rewards (SAR) matrix methodology for systematic evaluation of three actor-critic algorithms (DDPG, TD3, SAC) across five locomotion tasks in a 6-DOF underactuated bipedal robot simulation (Biped-5). Our progressive reward shaping strategy transitions from sparse (2 points) to dense (4+ points) waypoint configurations, enabling quantitative analysis of reward density effects on learning performance. Experimental results reveal distinct algorithmic superiority: SAC excels in stability-critical tasks, achieving 2% fall rates and superior energy efficiency (7.3J), while TD3 dominates dynamic locomotion with 4% fall rates and optimal cost of transport (1.21). SAC demonstrates robust waypoint navigation with 94% success rates and minimal deviation (0.21m), maintaining 84% generalization in complex scenarios. DDPG consistently underperforms across all tasks with 24-94% fall rates due to exploration limitations. Learning curves show continued improvement potential beyond 10M training steps. The Biped-5 benchmark suite establishes task-specific algorithmic guidelines and provides a standardized evaluation platform for advancing bipedal locomotion research.",
      tags: ["Real-Time", "Bipedal locomotion", "Deep Reinforcement Learning", "Underactuated Robots", "Actor-Critic Algorithms"],
    },
    {
      id: "dual_arm_kin",
      projectId: "",
      image: "/pub_pro_img/dual_arm_kin.jpg",
      video: "",
      title: "Kinematics-Based Real-Time Distance Monitoring for Safe Multi-Arm Robot Operations",
      venue: "ICCAS",
      year: "2025",
      authors: ["spsk", "djp", "bhuvan", "jagannath", "amit"],
      doi: "https://doi.org/10.23919/ICCAS66577.2025.11301286",
      abstract: "Collaborative manipulations in industrial setups such as assembly lines and warehouse management are essential for advanced automation. This paper presents a mathematically robust, kinematics-based method for real-time distance calculation between manipulator links without requiring external sensors. We first derive a comprehensive geometric framework for multi-arm systems that classifies link configurations as parallel, intersecting, or skew, enabling precise minimum distance calculations through line segment representation. The general n -arm mathematical framework is then specialized for dual-arm systems, focusing on collision-critical segments in table-mounted configurations. Our approach constructs distance matrices for systematic collision monitoring and reduces computational overhead by targeting inter-arm link pairs. Real-time hardware validation on dual Kinova Gen3 Lite manipulators demonstrates the method's effectiveness for computing inter-arm distances in shared workspace operations, confirming reliable collision avoidance performance in collaborative robotic tasks. The scalable mathematical foundation combined with efficient dual-arm implementation enables safe and effective collaborative automation in industrial applications.",
      tags: ["Real-Time", "Dual-Arm Manipulation", "Collision Avoidance", "Kinematics-Based Control", "Multi-Arm Robotic Systems", "Industrial Automation"],
    },
    {
      id: "runway",
      projectId: "",
      image: "/pub_pro_img/Runway_inspection.jpeg",
      video: "https://youtu.be/9kAnyB4-U7o",
      title: "Autonomous Multi-UAV System for Runway FOD Detection Using Hybrid Navigation",
      venue: "ICCAR",
      year: "2025",
      authors: ["ashish", "ankit", "djp", "pushkar", "amit"],
      doi: "https://doi.org/10.1109/ICCAR64901.2025.11072944",
      abstract: "This paper presents a novel multi-agent UAV-based framework for detecting and localizing foreign objects on airport runways, addressing critical aviation safety and operational efficiency concerns. Traditional methods such as manual inspection, vehicle-based patrols, radar systems, infrared sensors, and fixed cameras suffer from limitations that include slow operation or high costs or elevated false positive rates for small object detection. To overcome these challenges, we propose an integrated approach leveraging deep learning for both object detection and visual servoing. We have developed a custom dataset specifically designed for runway foreign object detection, localization, and visual servoing tasks. Our system implements a hybrid navigation strategy combining visual feedback and GPS, utilizing limited but reliable runway features such as threshold and edge markings. The framework employs a multi-agent approach for runway inspection, which has been successfully validated using two UAVs with demonstrated potential for system scalability. This methodology significantly reduces inspection time while maintaining the capability for human intervention when required. We present comprehensive experimental validation conducted under outdoor conditions, accompanied by detailed results and analysis that demonstrate the effectiveness of our approach.",
      tags: ["UAV", "Multi-Agent", "Runway Inspection", "FOD Detection", "Visual Servoing", "Deep Learning", "Hybrid Navigation"],
    },

    {
      id: "biped_design",
      projectId: "",
      image: "/pub_pro_img/biped_design.jpg",
      video: "",
      title: "Design, Kinematic Modeling, and Stability Verification of a Small-Scale Biped Robot",
      venue: "ICCAS",
      year: "2025",
      authors: ["jagannath", "spsk", "djp", "karan", "amit"],
      doi: "https://doi.org/10.23919/ICCAS66577.2025.11301351",
      abstract: "Kinematic validation, structural optimization, and gait planning are needed to build compact bipedal robots. This work designs, models, and simulates a 6-DOF bipedal robot for kinematic analysis and trajectory development. Joint configurations for stable locomotion are computed using the Denavit-Hartenberg (D-H) convention and geometric inverse kinematics. Smooth joint trajectories are created using cubic spline interpolation. MATLAB Simscape simulations verify motion feasibility and provide joint velocity patterns and torque needs. Topology optimization under gravitational self-weight loading assumptions reduces weight without compromising stability, improving mechanical efficiency. Dynamic stability is qualitatively examined by studying the Center of Mass (CoM) trajectory and determining the Zero Moment Point (ZMP) using the Linear Inverted Pendulum Model (LIPM). Simulations show steady gait patterns, synchronized joint motions, appropriate torque distribution across the ankle, knee, and hip joints, and a CoM-ZMP trajectory deviation of less than 6 mm, confirming gait stability. This research bridges theoretical modeling with real-world applications to produce agile, energy-efficient bipedal robots for humanoid locomotion.",
      tags: ["Humanoid", "Biped", "Stability", "Gait", "Topology Optimization", "ZMP", "Simscape", "Spline Interpolation"],
    },
    
    {
      id: "biped_review",
      projectId: "",
      image: "/pub_pro_img/biped_review.png",
      video: "",
      title: "From Classical Control to Reinforcement Learning: Trends in Bipedal Robot Locomotion",
      venue: "ICCCNT",
      year: "2025",
      authors: ["jagannath", "spsk", "djp", "karan", "amit"],
      doi: "",
      abstract: "Industrial inspections in cluttered environments and surveillance in rough terrains are still difficult for tracked and wheeled robots. In these situations, human-like locomotion is advantageous. However, achieving this presents several key challenges. Overcoming these challenges and enhancing locomotion with human-like mobility necessitates a critical survey of recent trends in bipedal robots. The present approaches in learning and control strategies that allow adaptive and stable locomotion are reviewed in this work. Beginning with conventional modelbased control methods like Zero Moment Point (ZMP) and dynamic modeling, we investigate how these approaches set the stage for real-time gait planning and stability on level ground. Examining their benefits in terrain adaptation, we also discuss the shift to new optimum control frameworks: Model Predictive Control (MPC), Trajectory Optimization (TO), and distributed whole-body control. The paper then explores bioinspired control techniques like Cerebellum Model Articulation Controllers (CMACs) and Central Pattern Generators (CPGs), which replicate sensory integration and natural rhythmic motion. We also address key components that convert into precise locomotion: actuators and their compliance systems, as well as heat management. Lastly, we investigate learning-based control, such as imitation-based approaches and reinforcement learning, which let systems maximize their performance by means of ongoing environmental interaction. Our survey shows that hybrid methods combining model-based control with learning algorithms offer the highest potential for strong terrain adaption. We provide future approaches for autonomous bipedal mobility in complicated situations by pointing out important research gaps in real-time adaptability and energy economy.",
      tags: ["Humanoid", "Biped", "Stability", "Gait", "Classical Control", "Optimal Control", "Reinforcement Learning", "Survey"],
    },
    {
      id: "tiltrotor",
      projectId: "",
      image: "/pub_pro_img/tiltrotor.jpg",
      video: "https://www.youtube.com/shorts/NK-A0Zvofsg",
      title: "Modeling and Validation of a Single-Axis Tilting Quadrotor with Enhanced Attitude Control",
      venue: "RAAI",
      year: "2024",
      authors: ["pushkar", "amit", "djp", "ankit", "ashish"],
      doi: "https://doi.org/10.1109/RAAI64504.2024.10949562",
      abstract: "Standard quadrotors are inherently limited by their underactuated nature, typically offering only 4 degrees of freedom (DOF) through their four rotors. While sufficient for general applications, however this design falls short in scenarios requiring full attitude control, improved wind resistance, aerial manipulation and other specialized capabilities. This paper presents the design, implementation, and evaluation of a novel fully actuated 6-DOF quadrotor featuring a single-axis tilting mechanism. Our proposed design incorporates four rotors and two tilt motors, enabling complete position and attitude control. We derive a comprehensive dynamic model of the quadrotor and discuss the control parameters crucial for stable flight. The paper details the practical implementation of this design on actual hardware, demonstrating its feasibility beyond theoretical concepts. Furthermore, we showcase the quadrotor's enhanced performance through experimental results. These results highlight the advantages of our fully actuated design over traditional underactuated quadrotors in applications requiring precise aerial manipulation and resilience to external disturbances.",
      tags: ["Quadrotor", "Tilting", "Attitude Control", "Dynamic Modeling", "Experimental Validation"],
    },
     {
      id: "firefighting",
      projectId: "",
      image: "/pub_pro_img/firefighting.jpg",
      video: "https://www.youtube.com/watch?v=BMY3XJge1qM&list=PL6SiUj2VGnRzmon_hSX_hfLP0CkzzldRh&index=2",
      title: "Vision-Based Control of UAV for Autonomous Firefighting",
      venue: "ICCAE",
      year: "2024",
      authors: ["ankit", "amit", "djp", "pushkar", "ashish", "tushar"],
      doi: "https://doi.org/10.1109/ICCAE59995.2024.10569529",
      abstract: "Urban and industrial environments frequently necessitate the immediate readiness of firefighting personnel to address potential fire emergencies, which can lead to a perpetual shortage of available manpower. To counter this challenge, we propose an integrated approach to autonomous firefighting through the utilization of Unmanned Aerial Vehicles (UAVs). The UAVs serve a dual purpose: providing auxiliary support to conventional firefighting efforts while simultaneously mitigating risks to human life. Our proposed methodology incorporates deep learning-based fire detection. The system combines image feature analysis with data obtained from distance sensor to establish Cartesian coordinates of the identified fire sources. Autonomous vision-based control for multirotor platform is developed, guided by the extracted image features and Cartesian coordinates. This system is designed to facilitate both swift deployment and autonomous operation, while still allowing for manual intervention as necessary. We present experimental validations for the vision-based control of the multirotor platform under outdoor conditions. Further tests are conducted to assess the performance characteristics of the spray subassembly, including spray distance and flow rate, prior to its deployment on aerial platforms. The experimental results are discussed for performance analysis of the approach.",
      tags: ["UAV", "Firefighting", "Vision-Based Control", "Deep Learning", "Autonomous Systems"],
    },
  ],
} as const;
