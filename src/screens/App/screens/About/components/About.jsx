import React, { Component } from 'react';
import Personal from './personal';
import Professional from './professional';
import WhyCode from './why-code';


// ToDo - redo this with setState this is pretty clunky

class About extends Component {
  constructor() {
    super();
    this.state = {
      name: "AboutMe",
      showPersonal: false,
      showProfessional: false,
      showWhyCode: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showPersonal": 
      this.setState({ showPersonal: !this.state.showPersonal });
      this.setState({ showProfessional: false});
      this.setState({ showWhyCode: false });
      break;
      case "showProfessional":
      this.setState({ showProfessional: !this.state.showProfessional });
      this.setState({ showWhyCode: false });
      this.setState({ showPersonal: false });
      break;
      case "showWhyCode":
      this.setState({ showWhyCode: !this.state.showWhyCode });
      this.setState({ showPersonal: false });
      this.setState({ showProfessional: false });
      break;
      default:
      return null;
    }
  }

  render() {
    const { showPersonal, showProfessional, showWhyCode } = this.state;
    return (
      <div className="about-me-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-component">
      <div className="about-btn-info-container">
            <div className="about-btn" onClick={() => this.hideComponent("showWhyCode")}>
              Why Code?
            </div>
            <div className="about-btn" onClick={() => this.hideComponent("showProfessional")}>
              Professional
            </div>
            <div className="about-btn" onClick={() => this.hideComponent("showPersonal")}>
              Personal
            </div>
            
            
        </div>
        <div className="about-me-information-container">
          { showWhyCode && <WhyCode /> }
          { showProfessional && <Professional /> }
          { showPersonal && <Personal /> }
        </div>
      </div>
  </div>
    )
  }
}

export default About;
