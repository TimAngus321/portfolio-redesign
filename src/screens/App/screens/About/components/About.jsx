import React, { Component } from 'react';
import Personal from './personal';
import Professional from './professional'
import WhyCode from './why-code'

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
      this.setState({ showProfessional: false})
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
      this.setState({ showProfessional: false })
      break;
      default:
      return null;
    }
  }

  render() {
    const { showPersonal, showProfessional, showWhyCode } = this.state;
    return (
      <div>
      <div>
          <button onClick={() => this.hideComponent("showPersonal")}>
            Personal Info
          </button>
          <button onClick={() => this.hideComponent("showProfessional")}>
            Professional Info
          </button>
          <button onClick={() => this.hideComponent("showWhyCode")}>
            Why I code
          </button>
        </div>
        <div className="about-me-information-container">
        { showPersonal && <Personal /> }
        { showProfessional && <Professional /> }
        { showWhyCode && <WhyCode /> }
      </div>
  </div>
    )
  }
}

export default About;
