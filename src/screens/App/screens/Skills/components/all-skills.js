import {useState, useEffect, Fragment} from 'react';
import {useTransition, animated, loop} from 'react-spring';
import {Transition} from 'react-spring/renderprops';
import * as React from 'react';

const AllSkills = () => {

const [items] = useState([
   { key: 1, skill: "React.js" },
   { key: 2, skill: "javascript" },
   { key: 3, skill: "Ruby" },
   { key: 4, skill: "Rails" },
   { key: 5, skill: "PostgreSQL" },
   { key: 6, skill: "Redux" },
   { key: 7, skill: "HTML" },
   { key: 8, skill: "SCSS" },
   { key: 9, skill: "CSS" },
   { key: 10, skill: "SQL" },
   { key: 11, skill: "Git" },
   { key: 12, skill: "Github" },
   { key: 13, skill: "Heroku" },
   { key: 14, skill: "Liquid" },
   { key: 15, skill: "Shopify" },
   { key: 16, skill: "APIs" },
   { key: 17, skill: "Figma" },
   { key: 18, skill: "Postman" },
   { key: 19, skill: "InVision" },
   { key: 20, skill: "Node.js" },
   { key: 21, skill: "AWS" },
   { key: 22, skill: "Lambda" },
   { key: 23, skill: "Wordpress" },
   { key: 24, skill: "German (B1)" },
   { key: 25, skill: "Presenting" },
   { key: 26, skill: "Teaching" },
   { key: 27, skill: "Managing" },
   { key: 28, skill: "Research" },
   { key: 29, skill: "Copywriting" },
   { key: 30, skill: "Musician" }
     ]);

  // const [index, setIndex] = useState(0);
 
  let fallingSkills = useTransition(items[Math.floor(Math.random()*items.length)], item => item.key, {
    loop: true,
    from: { transform: 'translate3d(0,-100%,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-100%,0)' },
    animate: { delay: 1000},
    style: { width: '100%', height: '100%', color: 'white'},
    });

  return (
  
    <div className="all-skills">
      {fallingSkills.map(({ item, props, key}) =>
      <animated.div
          key ={key}
          style={props}>
          <p>{item.skill}</p>
        </animated.div>
      )}
    </div>
  )
}
export default AllSkills;