import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ReactFormInputValidation from "react-form-input-validation";

const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;



function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(service_id, template_id, e.target, user_id)
  .then((result) => {
      console.log('Successfully Sent', result.text);
      alert('Message Sent!')
  }, (error) => {
      console.log('Failed to send', error.text);
      alert('Failed to send 😕')
  });
}

class ContactMe extends Component {
  constructor() {
    super();
  this.state = {
    fields: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    errors: {}
  };

  this.form = new ReactFormInputValidation(this);
  this.form.useRules({
    name: "required",
    email: "required|email",
    subject: "required",
    message: "required"
  });
}


  
render() {
  return (
    <div className="contact-container">
      <div className="contact-component">
      <div className="form-item">
        <h1 className="contact-title">Contact Me</h1>
          <p className="contact-blurb">
          Please feel free to contact me 
          regarding Ruby on Rails, React.js,
          javascript and shopify positions you 
          think I might be suitable for. I am most 
          interested in full time positions 
          in Berlin however I am open to
          freelance work as well. Please contact 
          me with this form and I'll get back to you
          as soon as I can. 
          </p>
        <form className="contact-form" onSubmit={sendEmail, this.form.handleSubmit} >
            <input type="hidden" name="contact_number"/>
            <ul className="contact-form-ul">
            <div className="name-and-email">
              <li className="name">
                <input 
                className="name-input" 
                type="text" 
                name="name" 
                placeholder="Name"
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.name} />
              </li>
              <li className="email">
                <input 
                className="email-input" 
                type="email" 
                name="email" 
                placeholder="Email"
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.email}
                />
              </li> 
            </div>
            <li className="subject">
            <input 
            className="subject-input" 
            type="subject" 
            name="subject" 
            placeholder="Subject"
            onChange={this.form.handleChangeEvent}
            value={this.state.fields.subject}
            />
            </li> 
            <li className="message">
            <textarea 
            className="message-input" 
            name="message" 
            placeholder="Message"
            onChange={this.form.handleChangeEvent}
            value={this.state.fields.message}
            /></li> 
          </ul>
          <div className="btn-container">
            <input className="contact-btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className="error-messages">
        <label className='error'>
          <p>{this.state.errors.name ? this.state.errors.name : ""}</p>
          <p>{this.state.errors.email ? this.state.errors.email : ""}</p>
          <p>{this.state.errors.subject ? this.state.errors.subject : ""}</p> 
          <p>{this.state.errors.message ? this.state.errors.message : ""}</p> 
        </label>
      </div>
      <div className="map">

      </div>
      </div>
    </div>
  );
  }
}

export default ContactMe;