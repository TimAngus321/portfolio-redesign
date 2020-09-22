import React, { Component } from 'react';


class WhyCode extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AboutMe'
    };
  }

  render() {
    return <div className="about-me-info">
      I caught the coding bug while working at a college
      in Prince of Songkla University, Phuket 
      when I was a website administrator. I needed to add some 
      space between two posts with a: <p className="br-tag"></p> tag and never stopped!
      <br/><br></br>
      I began coding static HTML & CSS websites with a little JS and jQuery
      in my spare time and staring using code academy and udemy tutorials.
      <br/><br/> 
      Since I was loving the coding and wanted to get more
      serious about it I decided to move to Berlin and do the LeWagon bootcamp.
      I learned a lot in just 9 weeks including Ruby, Rails, SQL, postgreSQL, db, 
      HTML, CSS, JS, components, figma and pitching.
      <br/><br/>
      I then continued learning JS, React.js and Redux for front-end development
      in order to achieve my goal of being true full-stack developer with Rails 
      on the back and react.js on the front.  
    </div>
  }
}

export default WhyCode;