import React from 'react';
import { Controls, PlayState, Timeline, Tween, SplitWords } from 'react-gsap';

const AllMySkills = () => {
    return (
    <Tween from={{ y: '-100%', stagger: {
        each: 0.7,
        from: "random",
        repeat: -1 
      } }} duration="2">
        <SplitWords
          wrapper={<div style={{ display: 'flex', alignSelf: 'flex-start', fontSize: '15px', transform: 'rotate(90deg)', width: '10px', height: '100%' }} />}
        >
           React.js javascript Ruby Rails PostgreSQL Redux HTML SCSS CSS SQL Git Github Heroku Liquid Shopify APIs Figma Postman Node.js AWS Lambda Wordpress German(B1) Presenting Teaching Managing Research Copywriting Musician
        
        </SplitWords>
      </Tween>
    )
    
}

export default AllMySkills;