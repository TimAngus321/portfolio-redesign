import React from 'react';
import { useTrail, animated } from 'react-spring';

// const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];


// const skills = ["React.js", "Javascript", "Ruby", "Ruby on Rails", "PostgreSQL", "Redux", "HTML", "SCSS", "CSS", "SQL", "Git", "Github", "Heroku ", "Liquid", "Shopify", "APIs", "Figma", "Postman", "Node.js", "AWS Lambda", "Wordpress",
// "German (B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician" ]

const skills = [
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
      ];

const StaggeredBars = () => {
  const trailSprings = useTrail(skills.length, {
    from: { height: '0px' },
    to: { height: '80px' },
  });

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '500px', color: 'white' }}>
      {trailSprings.map((spring, index) => (
        <animated.div
          key={skills}
          style={{
            ...spring,
            width: '20px',
            marginRight: '10px',
            transformOrigin: 'bottom',
            backgroundColor: 'white',
            color: 'white',
            text: skills[index].skill,
            content: 'skills[index].content',
            fontSize: '15px'
          }}
        />
      ))}
    </div>
  );
};

export default StaggeredBars;