
import {
  creator,
  web,
  javascript,
  reactjs,
  typescript,
  tailwind,
  nextJs,
} from "../assets";


import zageng from "../assets/zageng.jpg";
import portfolio from '../assets/portfolio.webp'
import eLearning from '../assets/eLearning.jpg'
import gdsc from '../assets/gdsc.jpg'
import animation from '../assets/animation.webp'
import foodies from '../assets/foodies.jpg'
import tic from '../assets/tic.jpg'
import world from '../assets/world.jpg'
import kasper from '../assets/kasper.jpg'
import guessGame from '../assets/guessGame.jpg'
import depi from '../assets/depiEN.webp'
import engZag from '../assets/engZag.webp'

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
      "Participating in real-world projects and collaborative development teams."
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
      "Reviewed code, shared feedback, and contributed to overall code quality and team growth."
    ],
  },
  {
    title: "Frontend Team Lead",
    company_name: "GDG On Campus ZAG",
    icon: gdsc,
    iconBg: "#fff",
    date: "October 2023 – Present",
    points: [
      "Guided the frontend team within the GDG core team, overseeing project workflows and timelines.",
      "Improved team coordination and collaboration across different roles.",
      "Supported junior developers through mentorship and hands-on code reviews.",
      "Helped deliver production-level community-driven web projects."
    ],
  },
  {
    title: "Zag-Eng Member",
    company_name: "Zag-Eng",
    icon: zageng, // replace with your Zag-Eng icon
    iconBg: "#fff",
    date: "December 2022 – July 2023",
    points: [
      "Sharpened technical skills through online self-study, interactive learning modules, and peer collaboration.",
      "Completed practical assignments and contributed to technical discussions with peers and instructors.",
      "Built a strong foundation in frontend development and web fundamentals."
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
      "Engaged in academic projects and student tech activities across the years."
    ],
  }
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

const projects = [
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
        name: "tailwind",
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
  {
    name: "Animation",
    description:
      "Web application that enables you to try different animations like scroll, modal view and more.",
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
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: animation,
    source_code_link: "https://github.com/Ayman-ezzeldin/Animation",
    source_demo_link: "https://animation-scroll-puce.vercel.app/",
  },
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
  {
    name: "My portfolio",
    description:
      "Web application that enables users to see my experience, view Projects  and can contact me.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "three js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Ayman-ezzeldin/ayman_ezz",
    source_demo_link: "https://ayman-ezz.vercel.app",
  },
  {
    name: "Foodies",
    description:
      "Web application that enables users to see meals, view varient of food  and can share you own meal.",
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
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: foodies,
    source_code_link: "https://github.com/Ayman-ezzeldin/foodies",
    source_demo_link: "https://foodies-kappa.vercel.app",
  },
  {
    name: "Tic-tac-toe",
    description:
      "Web application that enables two users to play tic-tac-toe game, see who is the winner.",
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
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: tic,
    source_code_link: "https://github.com/Ayman-ezzeldin/Tic-tac-toe",
    source_demo_link: "https://tic-tac-toe-snowy-theta.vercel.app",
  },
  {
    name: "World App",
    description:
      "World Application that see some features and animations, you can get it with basics .",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: world,
    source_code_link: "https://github.com/Ayman-ezzeldin/World-App",
    source_demo_link: "https://world-app-henna.vercel.app",
  },
  {
    name: "Kapser",
    description:
      "Kasper App, Hello WorldWe Are Kasper We Make Art, you can get it.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: kasper,
    source_code_link: "https://github.com/Ayman-ezzeldin/kasper",
    source_demo_link: "https://kasper-bice.vercel.app",
  },
  {
    name: "Guess Game",
    description:
      "Guess Game, Guess The Word and win the game, then you get your points.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
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

export { services, technologies, experiences, testimonials, projects };
