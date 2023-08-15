# Portfolio

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
- Animate page transitions ✅
- Change flexbox to grid for skill buttons and add the following skillsets
  - Testing libraries
  - Design tools
  - Maybe add misc skillset figma, warp, whimsical...

## Add to next Version

- Have skill card animations loop round continuously rather than reverse
- Carousel skillset selector for mobile version of skills page
- Replace home page animation with interactive framer motion gradient blob
- Replace min/max height & width with clamp(), use flexbox gap, and go over scss improvements generally  

## Improvement Ideas

- Perhaps move from framer motion to view transition api for page transitions once firefox supports it
- Investigate errors for firefox on Skills Page - temp fix implemented ⚙️
- Check quality of images for work page. Looks like they got a bit blury/grainy after optimisation.
- Check process state of skills animation with useContext everywhere to prevent errors when skill page skillSet buttons used too quickly
- GSAP might be a better animation library for more complex animations as it's more consise and clean. Framer Motion seems better for simple animations.
