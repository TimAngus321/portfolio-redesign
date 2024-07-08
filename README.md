# Portfolio

My personal portfolio all about me and my skills built in react.

## Deployed on Netlify with custom domain

[Check it out here](https://www.tim-angus.com/)

## Purpose of this App

- Demonstrate skills, experiences, and attributes
- SPA with dark theme, animations and experiment with react packages
- Make sure performance, accessibility, best practices and SEO are good
- Make first PWA

## Technologies Used

- React
- Typescript
- Javascript
- SCSS modules
- Custom Hooks
- HTML
- EmailJS
- Text Loop
- GSAP
- Framer Motion
- Abstract API
- React Dancing Lines
- Node Vibrant
- Media Queries
- Key Frames
- Yarn

## ToDo

- New animations replace css transitions with framer motion in skills page ✅
- Redo routes in a more traditional manner ✅
- Optimize Images ✅
- Update parallax scroll ✅
- Update so it's a progressive web app ✅
- Clean up code with typescript, code splitting with custom hooks, SCSS modules & more ✅
- Use react-colour-extractor package to add cool effect on skills page ✅
- Replace react-color-extractor package with node-vibrant for full control ✅
- Add limiter for abstract email validator API (don't allow more than 1 request a sec) ✅
- Animate page transitions with GSAP ✅
- Change flexbox to grid for skill buttons and add the following skillsets ✅
  - Testing libraries ✅
  - Design tools ✅
  - Maybe add misc skillset figma, warp, whimsical... ✅
- Ensure users see new updates on site without doing reload of app. This is for PWA & performance but it may mean some users don't see updates ✅
- Update any broken links in work page ✅
- Use useNavigate normally ✅
- Update CSS with new ways to deal with responsive layouts ✅
- Replace home page animation with nice gradient effect ✅
- Add select for contact to help users select relevant servies
- Make more resuable components
- Move notifications from useEmail hook to it's own hook so it's more readable
- Use more conventional react structure
- Create a carousel for sliderBtns for services and skill pages

## Add to next Version

- Add next JS/React Server Side Components
- Progress bar on background color of button (like netflix next episode btn) while animation runs on skills page
- Use cookies instead of localStorage to set expiry easily
- Carousel skillset selector for mobile version of skills page
- Replace home page animation with interactive framer motion gradient blob

## Improvement Ideas

- Investigate errors for firefox on Skills Page - Looks like base64 error from the svg icons that firefox/node vibrant can't process (png files in firefox work fine) - temp fix implemented ⚙️
- Check quality of images for work page. Looks like they got a bit blury/grainy after optimisation.
- Check process state of skills animation with useContext everywhere to prevent errors when skill page skillSet buttons used too quickly - unecessary
