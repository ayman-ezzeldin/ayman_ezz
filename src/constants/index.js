import {
  creator,
  web,
  javascript,
  reactjs,
  typescript,
  tailwind,
  nextJs,
} from "../assets";

import mffstore from "../assets/mffstore.webp";
import aino from "../assets/AINO.webp";
import alhelal from "../assets/alhelal.webp";
import zageng from "../assets/zageng.jpg";
import portfolio from "../assets/portfolio.webp";
import eLearning from "../assets/eLearning.jpg";
import gdsc from "../assets/gdsc.jpg";
import animation from "../assets/animation.webp";
import foodies from "../assets/foodies.jpg";
import tic from "../assets/tic.jpg";
import world from "../assets/world.jpg";
import kasper from "../assets/kasper.jpg";
import guessGame from "../assets/guessGame.jpg";
import depi from "../assets/depiEN.webp";
import engZag from "../assets/engZag.webp";
import weather from "../assets/weather.webp";
import hala from "../assets/hala.webp";
import dokkan from "../assets/dokkan.webp";
import nodeJsCourse from "../assets/nodeJsCourse.webp";
import lumina from "../assets/lumina.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: reactjs,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
  {
    title: "Backend Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Trainee",
    company_name: "Digital Egypt Pioneers Initiative (DEPI)",
    icon: depi,
    iconBg: "#fff",
    date: "May 2024 – November 2024",
    points: [
      "Undergoing intensive hands-on training in full stack web development.",
      "Learning advanced frontend and backend technologies, deployment, and best practices.",
      "Participating in real-world projects and collaborative development teams.",
    ],
  },
  {
    title: "Frontend Developer (React.js & Next.js)",
    company_name: "GDSG ZAG",
    icon: reactjs,
    iconBg: "#fff",
    date: "October 2023 – Present",
    points: [
      "Developed and maintained 15+ web applications using React.js and Next.js.",
      "Focused on building responsive, high-performance UIs with attention to user experience and design consistency.",
      "Collaborated with designers and team members to deliver clean, scalable code and reusable components.",
      "Reviewed code, shared feedback, and contributed to overall code quality and team growth.",
    ],
  },
  {
    title: "Frontend Team Lead",
    company_name: "GDG On Campus ZAG",
    icon: gdsc,
    iconBg: "#fff",
    date: "October 2023 – September 2025",
    points: [
      "Guided the frontend team within the GDG core team, overseeing project workflows and timelines.",
      "Improved team coordination and collaboration across different roles.",
      "Supported junior developers through mentorship and hands-on code reviews.",
      "Helped deliver production-level community-driven web projects.",
    ],
  },
  {
    title: "Zag-Eng Member",
    company_name: "Zag-Eng",
    icon: zageng,
    iconBg: "#fff",
    date: "December 2022 – July 2023",
    points: [
      "Sharpened technical skills through online self-study, interactive learning modules, and peer collaboration.",
      "Completed practical assignments and contributed to technical discussions with peers and instructors.",
      "Built a strong foundation in frontend development and web fundamentals.",
    ],
  },
  {
    title: "B.Sc. in Computer and Systems Engineering",
    company_name: "Zagazig University",
    icon: engZag, // replace with university icon
    iconBg: "#fff",
    date: "October 2020 – July 2025",
    points: [
      "Studied core engineering and computer science subjects including data structures, algorithms, and software engineering.",
      "Engaged in academic projects and student tech activities across the years.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ayman proved me wrong.",
    name: "karam yassin",
    designation: "CEO",
    company: "ZAG ENG",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ayman does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ayman optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const frontend_projects = [
  // Lumina
  {
    name: "Lumina Media Agency",
    description:
      "an advertising agency specializing in providing creative and comprehensive solutions in the field of advertising and marketing.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "blue-text-gradient",
      },
      {
        name: "Google sheets",
        color: "pink-text-gradient",
      },
    ],
    image: lumina,
    source_demo_link: "https://luminamedia.agency",
  },
  // Hala
  {
    name: "Hala Hotel",
    description:
      "Hala Hotel is a leading hotel chain in Saud Arabia, known for its luxurious accommodations, exceptional services, and exceptional experiences.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "blue-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: hala,
    source_demo_link: "https://hala-hotel-lemon.vercel.app/en",
  },
  // Dokkan
  {
    name: "Al_Dokkan",
    description:
      "Al Dokkan is a leading online marketplace in Egypt, offering a wide range of Books and services for individuals and businesses.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: dokkan,
    source_demo_link: "https://dokkan-two.vercel.app/en",
  },
  // mff store
  {
    name: "MFF Store",
    description:
      "MFF Systems is a fire safety and security e-commerce platform offering alarms, extinguishers, CCTV systems, and professional installation services.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: mffstore,
    source_demo_link: "https://mff-systems.com/en",
  },
  // aino
  {
    name: "AINO",
    description:
      "Built with modern AI capabilities, it allows users to generate, design, and preview outputs instantly from prompts as an interactive web app.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React flow",
        color: "pink-text-gradient",
      },
    ],
    image: aino,
    source_demo_link: "https://ai-gen-jmaz.vercel.app/",
  },
  // alhelal systems
  {
    name: "Alhelal Systems",
    description:
      "Al Helal Systems is a leading Egyptian company specializing in fire alarms, firefighting, and security systems. With over 9 years of experience, we have served more than 800 clients across Egypt, providing top-notch design, installation, and maintenance services.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: alhelal,
    source_demo_link: "https://alhelalsystems.com/en",
  },
  // portfolio
  {
    name: "My portfolio",
    description:
      "A modern and interactive portfolio web application built with React and Three.js, showcasing my professional experience, technical skills, and project portfolio. Features include smooth animations, 3D visualizations, responsive design, and an integrated contact form for seamless communication.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Three js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Ayman-ezzeldin/ayman_ezz",
    source_demo_link: "https://ayman-ezz.vercel.app",
  },
  // world app
  {
    name: "World App",
    description:
      "A responsive web application showcasing various interactive features and smooth animations. Built with HTML and CSS, this project demonstrates modern web design principles, including scroll animations, hover effects, and dynamic content presentation for an engaging user experience.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: world,
    source_code_link: "https://github.com/Ayman-ezzeldin/World-App",
    source_demo_link: "https://world-app-henna.vercel.app",
  },
  // kasper
  {
    name: "Kapser",
    description:
      "Kasper is a creative design showcase website featuring modern UI/UX design principles. Built with HTML and CSS, this project demonstrates clean layouts, artistic typography, smooth transitions, and responsive design techniques for presenting creative work and services.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: kasper,
    source_code_link: "https://github.com/Ayman-ezzeldin/kasper",
    source_demo_link: "https://kasper-bice.vercel.app",
  },
  // zag family
  {
    name: "Zag Family",
    description:
      "Web-based platform that allows users to search, and manage data from various providers, providing a convenient and efficient solution for students and needs.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "pink-text-gradient",
      },
    ],
    image: zageng,
    source_code_link: "https://github.com/Ayman-ezzeldin/ZagEng-Family",
    source_demo_link: "https://zag-eng-family.vercel.app",
  },
  // Animation
  {
    name: "Animation",
    description:
      "An interactive web application built with React.js and Motion UI, showcasing various animation techniques including smooth scroll animations, modal transitions, hover effects, and dynamic content reveals. This project demonstrates modern animation libraries and CSS transitions for creating engaging user interfaces.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Motion UI",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: animation,
    source_code_link: "https://github.com/Ayman-ezzeldin/Animation",
    source_demo_link: "https://animation-scroll-puce.vercel.app/",
  },
  // Weather
  {
    name: "Weather App",
    description:
      "A modern weather application built with Next.js and Shadcn UI that provides real-time weather information for any location. Features include dark mode support, responsive design, location-based weather data, and an intuitive user interface for checking current weather conditions and forecasts.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
      {
        name: "Dark Mode",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Ayman-ezzeldin/weather-app",
    source_demo_link: "https://weather-app-sable-ten-91.vercel.app/en",
  },
  // E-Learning
  {
    name: "E-Learning",
    description:
      "A comprehensive Education booking platform that allows users to book courses in various subjects, including front-end, back-end, data science and offers curated recommendations for popular courses.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind ",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap ",
        color: "pink-text-gradient",
      },
      {
        name: "db.json",
        color: "text-red-600",
      },
    ],
    image: eLearning,
    source_code_link: "https://github.com/ayman-ezzeldin/E-Learning-App",
    source_demo_link: "https://e-learning-app-six.vercel.app/",
  },
  // foodies
  {
    name: "Foodies",
    description:
      "A full-stack food sharing platform built with Next.js and database integration, allowing users to browse various meal options, view different food variants, and share their own culinary creations. Features include user authentication, meal posting, search functionality, and interactive food discovery.",
    tags: [
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: foodies,
    source_code_link: "https://github.com/Ayman-ezzeldin/foodies",
    source_demo_link: "https://foodies-kappa.vercel.app",
  },
  // tic-tac-toe
  {
    name: "Tic-tac-toe",
    description:
      "An interactive tic-tac-toe game built with React.js, featuring real-time game state management, turn-based gameplay, and winner detection. The application provides a smooth user experience with responsive design, game reset functionality, and visual feedback for player moves and game outcomes.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "State",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: tic,
    source_code_link: "https://github.com/Ayman-ezzeldin/Tic-tac-toe",
    source_demo_link: "https://tic-tac-toe-snowy-theta.vercel.app",
  },
  // guess game
  {
    name: "Guess Game",
    description:
      "An engaging word guessing game built with HTML, CSS, and JavaScript, where players attempt to guess words to earn points. Features include dynamic word generation, scoring system, game difficulty levels, and interactive feedback to enhance the gaming experience and challenge players' vocabulary skills.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: guessGame,
    source_code_link: "https://github.com/Ayman-ezzeldin/guess-the-word",
    source_demo_link: "https://guess-the-word-chi.vercel.app",
  },
];

const backend_projects = [
  {
    name: "Courses Management System",
    description:
      "A small project that simulates a courses management system built with Node.js and Express, allowing admin to manage courses and students",
    tags: [
      {
        name: "Node.js",
        color: "text-green-600",
      },
      {
        name: "Express",
        color: "text-blue-600",
      },
      {
        name: "MongoDB",
        color: "text-pink-600",
      },
    ],
    image: nodeJsCourse,
    source_code_link:
      "https://github.com/ayman-ezzeldin/backend/tree/main/session%205",
  },
];

const ui_projects = [
  // Dokkan
  {
    name: "Al_Dokkan",
    description:
      "Al Dokkan is a leading online marketplace in Egypt, offering a wide range of Books and services for individuals and businesses.",
    tags: [
      {
        name: "Figma",
        color: "text-blue-600",
      },
    ],
    image: dokkan,
    source_demo_link:
      "https://www.figma.com/design/6wJ4zcElWQa47MGtFaMH63/My-designs?node-id=0-1",
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  frontend_projects,
  backend_projects,
  ui_projects,
};
