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
  tomato,
  kadahive,
  emmanuel,
  lawal,
  github,
  linkedin,
  love,
  phone,
  twitter,
  whatsapp,
  repository,
} from "../assets";

const socialss = [
  {
    icon: repository,
    url: "https://github.com/naijabuz",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/tomilolaaaaa/",
  },
  // {
  //   icon: love,
  // },
  // {
  //   icon: phone,
  //   desc: "(+234)7036513120",
  // },
  {
    icon: twitter,
    url: "https://twitter.com/tomilolaaaaar",
  },
  {
    icon: whatsapp,
    url: "https://wa.me/+2349059694751/",
  },
];

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: backend,
  },
  {
    title: "Technical Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "KadaHive Tech Hub",
    icon: kadahive,
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      "Creating responsive websites using WordPress, CSS, JavaScript, and React",
      "Testing and debugging of company's clients' websites",
      "Updating and implementing the latest SEO techniques for both existing and new company projects",
      "Collaboration with UI/UX designers to ensure the technical feasibility of the designs",
      "Writing technical documentations and updating user guides to facilitate the end-users' understanding of the applications",
    ],
  },
  {
    title: "Procurement Officer",
    company_name: "Tomato Jos Farming & Processing Ltd",
    icon: tomato,
    iconBg: "#E6DEDD",
    date: "June 2021 - April 2023",
    points: [
      "Managing the acquisition of goods and services for the organization",
      "Sourcing suppliers, negotiating contracts and ensuring cost-effectiveness",
      "Maintaining compliance with procurement policies and regulations to support operational needs",
      "Daily tracking and reconciliation of data entry discrepancies",
      "Monitoring of inventory thresholds across multiple departments",
      "Monthly forecast of purchases based on previous historical data",
      "Creation of a Procurement Request Management system on Google spreadsheets",
      "Ensured efficient and cost-effective procurement processes.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I always knew he will do great things. Started rough but he knows how stuff works now.",
    name: "Emeka Ndubusi",
    designation: "Hub Manager",
    company: "Kadahive",
    image: kadahive,
  },
  {
    testimonial:
      "Tomi is dedicated and comitted to continous Learning. I like that about him. Keep pushing bro.",
    name: "David Adigun",
    designation: "Tech Talent Instructor",
    company: "React Dev",
    image: emmanuel,
  },
  {
    testimonial:
      "A problem solver. Bold insights and creative ideas. Nothing but good words for Tomilola.",
    name: "Abdulmateen Lawal",
    designation: "Technical Product Manager",
    company: "Innovations Inc",
    image: lawal,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialss,
};
