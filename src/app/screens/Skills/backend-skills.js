import prismaLogo from './images/prismaLogo.svg';

const backendSkillSet = {
    skill1: {
        name: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: 'Node.js Logo'
    }, 
    skill2: {
        name: 'Express.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        alt: 'Express.js Logo',
        styleClass: 'inverseWhite'
    },
    skill3: {
        name: "Ruby on Rails",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
        alt: "Ruby on Rails Logo"
    },
    skill4: {
        name: "PostgreSQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
        alt: "PostgreSQL Logo"
    },
    skill5: {
        name: "Mysql",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        alt: "Mysql Logo"
    },
    skill6: {
        name: "Prisma",
        image: prismaLogo,
        alt: "Prisma Logo",
        styleClass: 'inverseWhite'
    },
}

export default backendSkillSet;
