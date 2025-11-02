import pokemonAppImg from "../../../../assets/workImages/pokemonApp.png";
import gavelMobileImg from "../../../../assets/workImages/gavelMobileImg.png";
import gavelWebImg from "../../../../assets/workImages/gavelWebImg.png";
import reactFlatsImg from "../../../../assets/workImages/reactFlatsImg.png";
import personalPortfolioImg from "../../../../assets/workImages/portfolioImg.png";

const reactProjects = [
  {
    name: "Company: Gavel (Mobile)",
    desc: "Mobile App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React Native, Redux, Typescript, CSS in JS, Jest, custom hooks, APIs & React Component Library.",
    link: "https://letsgavel.com/",
    img: gavelMobileImg,
  },
  {
    name: "Company: Gavel (Web)",
    desc: "Web App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React, Redux, Typescript, Jest, SCSS modules, custom hooks, APIs & Ant Design component library.",
    link: "https://letsgavel.com/",
    img: gavelWebImg,
  },
  {
    name: "Project: Pokemon App",
    desc: `Pokemon App for searching for pokemon, a handy autocomplete feature and a "Who's That Pokemon?" game.`,
    techTitle: "Tech Used",
    techStack: "React, Javascript, SCSS and PokeApi.",
    link: "https://timangus321.github.io/pokemon-app/",
    img: pokemonAppImg,
  },
  {
    name: "Project: Personal Portfolio",
    desc: "A personal portfolio to let people know about me, my experience, my skills and how to contact me.",
    techTitle: "Tech Used",
    techStack:
      "React, SCSS modules, Typescript, Javascript, Custom Hooks, Text Loop, GSAP, Framer Motion, Abstract API, React Dancing Lines (my version), Node Vibrant, Media Queries, Key Frames, Yarn, EmailJS and figma. Design based off an Awwards winner.",
    link: "/home",
    img: personalPortfolioImg,
  },
  {
    name: "Project: React Flats",
    desc: "LeWagon React & Redux tutorial on the basics of building React apps with Redux.",
    techTitle: "Tech Used",
    techStack: "React, HTML, SCSS & Google Maps API.",
    link: "https://timangus321.github.io/react-flats",
    img: reactFlatsImg,
  },

  // If you bother to fix uncomment & add image
  // reactApp4: {
  //     name: "React Gifs",
  //     desc: "LeWagon React & Redux tutorial on the basics of building React apps with Redux.",
  //     techTitle: "Tech Used",
  //     techStack: "React, SCSS, HTML & Giphy API",
  //     link: "https://timangus321.github.io/react-gifs/",
  //     img:
  // }
];

export default reactProjects;
