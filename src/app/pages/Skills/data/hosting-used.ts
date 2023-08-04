import netlifyLogo from '../../../../assets/skillsImages/hostLogos/netlifyLogo.webp';
import githubLogo from '../../../../assets/skillsImages/hostLogos/github-original.svg';
import herokuLogo from '../../../../assets/skillsImages/hostLogos/heroku-original.svg';
import awsLogo from '../../../../assets/skillsImages/hostLogos/amazonwebservices-original.svg';

const hostingUsed = [
    {
        key: 1,
        name: "Github Pages",
        image: githubLogo,
        alt: "Github Pages Logo",
        styleClass: 'inverseWhite',
        waterfall: [""]
    }, 
    {
        key: 2,
        name: "Heroku",
        image: herokuLogo,
        alt: "Heroku Logo",
        waterfall: [""]
    }, 
    {
        key: 3,
        name: "AWS",
        image: awsLogo,
        alt: "Heroku Logo",
        waterfall: [""]
    },
    {
        key: 4,
        name: "Netlify",
        image: netlifyLogo,
        alt: "Netlify Logo",
        waterfall: [""]
    }
];

export default hostingUsed;