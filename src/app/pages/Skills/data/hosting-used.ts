import netlifyLogo from '../../../../assets/skillsImages/hostLogos/netlifyLogo.webp';
import githubLogo from '../../../../assets/skillsImages/hostLogos/github-original.svg';
import herokuLogo from '../../../../assets/skillsImages/hostLogos/heroku-original.svg';
import awsLogo from '../../../../assets/skillsImages/hostLogos/amazonwebservices-original.svg';

const hostingUsed = [
    {
        name: "Github Pages",
        image: githubLogo,
        alt: "Github Pages Logo",
        styleClass: 'inverseWhite'
    }, 
    {
        name: "Heroku",
        image: herokuLogo,
        alt: "Heroku Logo"
    }, 
    {
        name: "AWS",
        image: awsLogo,
        alt: "Heroku Logo"
    },
    {
        name: "Netlify",
        image: netlifyLogo,
        alt: "Netlify Logo"
    }
];

export default hostingUsed;