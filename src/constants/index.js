import {
  creator,
  web,
  javascript,
  reactjs,
  typescript,
  tailwind,
  mobile,
  backend,
  html,
  css,
  redux,
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
  gdsc,
  animation,
  foodies,
  tic,
  world,
  kasper,
  guessGame,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "GDSC ZAG",
    icon: reactjs,
    iconBg: "#fff",
    date: "October 2023 - Now",
    points: [
      'Make up to 10+ project.',
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "GDSC ZAG",
    company_name: "Lead of frontend team",
    icon: gdsc,
    iconBg: "#fff",
    date: "October 2023 - Now",
    points: [
      "Developing and maintaining my soft skills.",
      "Lead our core-team , members and providing leadership and guidance to our team members.",
      "Collaborating with my teams including designers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "GDSC ZAG",
    icon: nextJs,
    iconBg: "#fff",
    date: "October 2023 - Now",
    points: [
      "Make up to 5+ project.",
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
