import React, { Component } from 'react';

class AllSkills extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AllSkills'
    };
    
  }

  render() {
    const allOfMySKills = ["React.js", "Javascript", "Ruby", "Ruby on Rails", "PostgreSQL", "Redux", "HTML", "SCSS", "CSS", "SQL", "Git", "Github", "Heroku ", "Liquid", "Shopify", "APIs", "Figma", "Postman", "Node.js", "AWS Lambda", "Wordpress",
    "German (B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician" ]

    return (
    <div className="all-skills">
        {allOfMySKills}
    </div>
    )
  }
  }
 export default AllSkills;