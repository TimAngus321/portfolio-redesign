import pokemonAppImg from "../../../../assets/workImages/pokemonAppImg.webp";
import gavelMobileImg from "../../../../assets/workImages/gavelMobileImg.webp";
import gavelWebImg from "../../../../assets/workImages/gavelWebImg.webp";
import reactFlatsImg from "../../../../assets/workImages/reactFlatsImg.webp";
import personalPortfolioImg from "../../../../assets/workImages/personalPortfolioImg.webp";

const reactProjects = [
  {
    name: "Company: Gavel (Mobile)",
    desc: "Mobile App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React Native, Redux, Typescript, CSS in JS, custom hooks, APIs & React Component Library",
    link: "https://letsgavel.com/",
    img: gavelMobileImg,
  },
  {
    name: "Company: Gavel (Web)",
    desc: "Web App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React, Redux, Typescript, Jest, SCSS modules, custom hooks, APIs & Ant Design component library",
    link: "https://letsgavel.com/",
    img: gavelWebImg,
  },
  {
    name: "Project: Pokemon App",
    desc: "Pokemon App for searching & browsing pokemon with a handy autocomplete feature.",
    techTitle: "Tech Used",
    techStack: "React, SCSS, PokeApi",
    link: "https://timangus321.github.io/pokemon-app/",
    img: pokemonAppImg,
  },
  {
    name: "Project: Personal Portfolio",
    desc: "A personal portfolio to let people know about me and my skills.",
    techTitle: "Tech Used",
    techStack:
      "React, SCSS, Typescript, Quote Loop, GSAP, EmailJS, SCSS modules and figma. Design based off an Awwards winner.",
    link: "/home",
    img: personalPortfolioImg,
  },
  {
    name: "Project: React Flats",
    desc: "LeWagon React & Redux tutorial on the basics of building React apps with Redux.",
    techTitle: "Tech Used",
    techStack: "React, HTML, SCSS & Google Maps API",
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
