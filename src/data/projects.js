import portfolioImg from "../assets/images/project-3.jpg";
import bloodImg from "../assets/images/project-8.jpg";
import gameImg from "../assets/images/game 1.png";
import crmImg from "../assets/images/project-9.png";

const projects = [
  {
    id: 1,

    title: "My Portfolio",

    description:
      "A modern responsive portfolio built with React and Vite showcasing my projects, skills, experience, and contact information.",

    category: "web development",

    image: portfolioImg,

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Responsive Design",
    ],

    github: "https://github.com/SuryawanshiRahul/MyPortfolio-",

    demo: "https://suryawanshirahul.github.io/MyPortfolio-",
  },

  {
    id: 2,

    title: "LifeDrops - Blood Donation Application",

    description:
      "A Flutter application developed as an MCA final-year project that connects blood donors, receivers, and blood banks with Firebase integration and machine learning prediction.",

    category: "flutter",

    image: bloodImg,

    technologies: [
      "Flutter",
      "Firebase",
      "Machine Learning",
      "REST API",
      "Google Maps",
    ],

    github: "https://github.com/SuryawanshiRahul",

    demo: "#",
  },

  {
    id: 3,

    title: "CampusPilot CRM",

    description:
      "A professional CRM mobile application built using React Native for managing leads, activities, analytics, and communication.",

    category: "react native",

    image: crmImg,

    technologies: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "TypeScript",
      "REST API",
      "React Navigation",
    ],

    github: "#",

    demo: "#",
  },

  {
    id: 4,

    title: "Simon Says Game",

    description:
      "A browser-based memory game developed using HTML, CSS, and JavaScript.",

    category: "javascript",

    image: gameImg,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
    ],

    github:
      "https://github.com/SuryawanshiRahul/simon-says-game",

    demo: "#",
  },
];

export default projects;