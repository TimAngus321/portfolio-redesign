import React from 'react';
import {useTransition, animated} from 'react-spring'
import {Transition} from 'react-spring/renderprops'



const AllSkills = () => {
  // const items = [
  //   {key: 1, item: "one"},
  //   {key: 2, item: "two"},
  //   {key: 3, item: "three"}
  // ]

const items = ["React.js", "Javascript", "Ruby", "Ruby on Rails", "PostgreSQL", "Redux", "HTML", "SCSS", "CSS", "SQL", "Git", "Github", "Heroku ", "Liquid", "Shopify", "APIs", "Figma", "Postman", "Node.js", "AWS Lambda", "Wordpress",
"German (B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician" ]  

// const items = [
//    { item: "React.js" },
//    { item: "javascript" },
//    { item: "Ruby" },
//    { item: "Rails" },
//    { item: "PostgreSQL" },
//    { item: "Redux" },
//    { item: "HTML" },
//    { item: "SCSS" },
//    { item: "CSS" },
//    { item: "SQL" },
//    { item: "Git" },
//    { item: "Github" },
//    { item: "Heroku" },
//    { item: "Liquid" },
//    { item: "Shopify" },
//    { item: "APIs" },
//    { item: "Figma" },
//    { item: "Postman" },
//    { item: "InVision" },
//    { item: "Node.js" },
//    { item: "AWS" },
//    { item: "Lambda" },
//    { item: "Wordpress" },
//    { item: "German (B1)" },
//    { item: "Presenting" },
//    { item: "Teaching" },
//    { item: "Managing" },
//    { item: "Research" },
//    { item: "Copywriting" },
//    { item: "Musician" }
//      ];
  // const transitions = useTransition(items, item => item.key, {
  //   from: { transform: 'translate3d(0,-40px,0)', color: 'white', width: '100%', height: '100%' },
  //   enter: { transform: 'translate3d(0,0px,0)' },
  //   leave: { transform: 'translate3d(0,-40px,0)' },
     
  //   })
  return (
    <div className="all-skills">
   <Transition
  items={items} keys={item => item.key}
  from={{ transform: 'translate3d(0,-40px,0)' }}
  enter={{ transform: 'translate3d(0,0px,0)' }}
  leave={{ transform: 'translate3d(0,-40px,0)' }}>
  {item => props => <div style={props}>{item.item}</div>}
</Transition>
</div>
  )
}
export default AllSkills;