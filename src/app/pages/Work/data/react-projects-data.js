import pokemonAppImg from '../images/pokemonAppImg.png';
import gavelMobileImg from '../images/gavelMobileImg.png';
import gavelWebImg from '../images/gavelWebImg.png';
import reactFlatsImg from '../images/reactFlatsImg.png';
import personalPortfolioImg from '../images/personalPortfolioImg.png';
 

const reactProjects = {
    reactApp1: {
        name: "Gavel Mobile",
        desc: "Mobile App for live auctions & selling TCGs and collectibles while streaming.",
        techTitle: "Tech Used",
        techStack: "React Native, Redux, CSS in JS, custom hooks, APIs & React Component Library",
        link: "https://letsgavel.com/",
        img: gavelMobileImg,
    },
    reactApp2: {
        name: "Gavel Web",
        desc: "Web App for live auctions & selling TCGs and collectibles while streaming.",
        techTitle: "Tech Used",
        techStack: "React, Redux, SCSS modules, custom hooks, APIs & antd component library",
        link: "https://letsgavel.com/",
        img: gavelWebImg,
    },
    reactApp3: {
        name: "Pokemon App",
        desc: "Pokemon App for searching & browsing pokemon with a handy autocomplete feature.",
        techTitle: "Tech Used",
        techStack: "React, SCSS, PokeApi",
        link: "https://timangus321.github.io/pokemon-app/",
        img: pokemonAppImg,
    },
    reactApp4: {
        name: "Personal Portfolio",
        desc: "A personal portfolio to let people know about my skills and advertise myself.",
        techTitle: "Tech Used",
        techStack: "React, SCSS, Quote Loop, CSS Transition, CSS in JS and figma. Design based off an Awwards winner.",
        link: "www.tim-angus.com",
        img: personalPortfolioImg,
    },
    reactApp5: {
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
}

export default reactProjects;