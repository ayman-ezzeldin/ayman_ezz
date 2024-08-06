import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  zageng ,
  nextJs,
  portfolio,
  eLearning,
} from "../assets";

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
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "GDSC ZAG",
    icon: reactjs,
    iconBg: "#fff",
    date: "October 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next js",
    company_name: "GDSC ZAG",
    icon: nextJs,
    iconBg: "#fff",
    date: "October 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
    name: "My portfolio",
    description:
      "Web application that enables users to see my experience, view Projects  and can contact me.",
    tags: [
      {
        name: "Next JS",
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
];

export { services, technologies, experiences, testimonials, projects };
