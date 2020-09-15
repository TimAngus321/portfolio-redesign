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
        console.log('Successfully Sent', result.text);
        alert('Message Sent!')
    }, (error) => {
        console.log('Failed to send', error.text);
        alert('Failed to send 😕')
    });
  }

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
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number"/>
            <ul className="contact-form-ul">
            <div className="name-and-email">
              <li className="name">
                <input 
                className="name-input" 
                type="text" 
                name="name" 
                placeholder="Name" />
              </li>
              <li className="email">
                <input 
                className="email-input" 
                type="email" 
                name="email" 
                placeholder="Email"/>
              </li> 
            </div>
            <li className="subject"><input className="subject-input" type="subject" name="subject" placeholder="Subject"/></li> 
            <li className="message"><textarea className="message-input" name="message" placeholder="Message"/></li> 
          </ul>
          <div className="btn-container">
            <input className="contact-btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className="map">

      </div>
      </div>
    </div>
  );
}