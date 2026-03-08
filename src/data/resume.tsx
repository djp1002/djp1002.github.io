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
        url: "#",
        icon: Icons.email,

        navbar: false,
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
        "https://youtu.be/9kAnyB4-U7o",
    },
    {
      id: "tiltrotor",
      publicationIds: [],
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
      video: "https://youtu.be/9kAnyB4-U7o",
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
  ],


  publications: [
    {
      id: "mppf",
      projectId: "uav-quadruped",
      image: "/pub_pro_img/mppf_overview_comp.jpg",
      video: "https://youtu.be/9kAnyB4-U7o",
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
      image: "/pub_pro_img/full_window_exp_mppf.png",
      video: "https://youtu.be/9kAnyB4-U7o",
      title: "Reference-Coupled Heterogeneous Multi-Agent Coordination with Real-Time Adaptive Perimeter Field Navigation",
      venue: "ICARA",
      year: "2026",
      authors: ["djp", "pushkar", "spsk", "ankit",  "ashish", "jagannath", "treddy", "amit"],
      doi: "",
      abstract: "Autonomous industrial inspection in unstructured environments requires coordinated UAV-ground systems for aerial perception and ground-level task execution. Coordinating Heterogeneous 3D aerial and 2D ground dynamics requires control frameworks with adaptable coordination strategies. Existing decoupled or fixed hierarchical approaches lack optimal coordination and runtime strategy adaptability. This work presents a reference-coupled Linear Quadratic Regulator (LQR) framework with parameterized coordination achieving optimal state synchronization across heterogeneous 3D aerial and 2D ground dynamics. The formulation enables continuous coordination strategies from leader-follower to symmetric modes via single-parameter adjustment, with adaptive altitude control maintaining perception coverage. For real-time trajectory generation, we introduce APFNav (Adaptive Perimeter Field Navigation) employing moving perimeter charge representation with 0.012 s computational latency. The system integrates RGB-D perception, deep learning terrain classification, and vision-based state estimation. Multiterrain experiments confirm successful autonomous navigation with terrain-adaptive locomotion, establishing the viability of reference-coupled LQR coordination for heterogeneous multiagent systems in resource-constrained embedded deployment.",
      tags: ["Multi-Agent", "Quadruped", "UAV", "Industrial Inspection", "Real-Time", "Edge Computing", "LQR", "Adaptive Control", "Heterogeneous Systems", "Reference-Coupling"],
    },
  ],
} as const;
