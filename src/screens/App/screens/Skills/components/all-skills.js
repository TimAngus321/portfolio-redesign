import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const AllSkills = () => {

const skills = useState([
   { key: 1, content: "React.js" },
   { key: 2, content: "javascript" },
   { key: 3, content: "Ruby" },
   { key: 4, content: "Rails" },
   { key: 5, content: "PostgreSQL" },
   { key: 6, content: "Redux" },
   { key: 7, content: "HTML" },
   { key: 8, content: "SCSS" },
   { key: 9, content: "CSS" },
   { key: 10, content: "SQL" },
   { key: 11, content: "Git" },
   { key: 12, content: "Github" },
   { key: 13, content: "Heroku" },
   { key: 14, content: "Liquid" },
   { key: 15, content: "Shopify" },
   { key: 16, content: "APIs" },
   { key: 17, content: "Figma" },
   { key: 18, content: "Postman" },
   { key: 19, content: "InVision" },
   { key: 20, content: "Node.js" },
   { key: 21, content: "AWS" },
   { key: 22, content: "Lambda" },
   { key: 23, content: "Wordpress" },
   { key: 24, content: "German (B1)" },
   { key: 25, content: "Presenting" },
   { key: 26, content: "Teaching" },
   { key: 27, content: "Managing" },
   { key: 28, content: "Research" },
   { key: 29, content: "Copywriting" },
   { key: 30, content: "Musician" }
     ]);


//   const skills = ["React.js", "Javascript", "Ruby", "Ruby on Rails", "PostgreSQL", "Redux", "HTML", "SCSS", "CSS", "SQL", "Git", "Github", "Heroku ", "Liquid", "Shopify", "APIs", "Figma", "Postman", "Node.js", "AWS Lambda", "Wordpress", "German (B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician" ]

const [index, set] = useState(0)
  const transitions = useTransition(skills, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />
  ))

}

export default AllSkills;