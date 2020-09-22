import React, { Component } from 'react';

class Professional extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AboutMe'
    };
  }

  render() {
    return <div className="about-me-info">
      I have been working in the tech industry for several years now.
      I have worked as a copywriter for the digital agency SoIdea in Bangkok 
      and as a website administrator in a college inside Prince of Songkla University. 
      <br/><br/>
      However my first transition into a developer role was fairly recent.
      My first role as full-stack developer at the digital agency Merconic. The 
      position tested my skills in both front-end and back-end. 
      <br/><br/>
      For front-end I mostly 
      worked with Javascript, jQuery, liquid, SCSS and HTML building beautiful 
      dynamic components and added some functionality. 
      <br/><br/>
      On the backend I gained experience working with technologies and languages
      outside of my current stack. I worked with PHP for Wordpress sites
      and Node.js for shopify apps. 
      <br/><br/>
      ...
    </div>
  }
}

export default Professional;