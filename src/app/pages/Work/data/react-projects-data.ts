import pokemonAppImg from "../../../../assets/workImages/pokemonAppImg.webp";
import gavelMobileImg from "../../../../assets/workImages/gavelMobileImg.webp";
import gavelWebImg from "../../../../assets/workImages/gavelWebImg.webp";
import reactFlatsImg from "../../../../assets/workImages/reactFlatsImg.webp";
import personalPortfolioImg from "../../../../assets/workImages/personalPortfolioImg.webp";

const reactProjects = [
  {
    name: "Gavel Mobile",
    desc: "Mobile App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React Native, Redux, Typescript CSS in JS, custom hooks, APIs & React Component Library",
    link: "https://letsgavel.com/",
    img: gavelMobileImg,
  },
  {
    name: "Gavel Web",
    desc: "Web App for live auctions & selling TCGs and collectibles while streaming.",
    techTitle: "Tech Used",
    techStack:
      "React, Redux, Typescript, SCSS modules, custom hooks, APIs & antd component library",
    link: "https://letsgavel.com/",
    img: gavelWebImg,
  },
  {
    name: "Pokemon App",
    desc: "Pokemon App for searching & browsing pokemon with a handy autocomplete feature.",
    techTitle: "Tech Used",
    techStack: "React, SCSS, PokeApi",
    link: "https://timangus321.github.io/pokemon-app/",
    img: pokemonAppImg,
  },
  {
    name: "Personal Portfolio",
    desc: "A personal portfolio to let people know about my skills and advertise myself.",
    techTitle: "Tech Used",
    techStack:
      "React, SCSS, Typescript, Quote Loop, CSS Transition, SCSS modules and figma. Design based off an Awwards winner.",
    link: "www.tim-angus.com",
    img: personalPortfolioImg,
  },
  {
    name: "React Flats",
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
