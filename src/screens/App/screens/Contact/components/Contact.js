import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact-container">
    <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"/>
          <ul className="contact-form-ul">
          <div className="name-and-email">
            <li className="name"><input className="name-input" type="text" name="name" placeholder="Name" /></li>
            <li className="email"><input className="email-input" type="email" name="email" placeholder="Email"/></li> 
          </div>
          <li className="subject-li"><input type="subject" name="subject" placeholder="Subject"/></li> 
          <li className="message-li"><textarea name="message" placeholder="Message"/></li> 
        </ul>
        <input className="contact-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}