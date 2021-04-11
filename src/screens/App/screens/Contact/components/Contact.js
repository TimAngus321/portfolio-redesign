import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const ContactMe = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data, e) => {
      e.preventDefault();
      alert(`Thank you ${data.name} for your message!`)
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      sendForm(serviceID, templateId, {from_name: data.name, email: data.email, subject: data.subject, message: data.message }, userID)
      e.target.reset();
      }

      const sendForm = (serviceID, templateId, userID, variables) => {
        emailjs.send(
          serviceID,templateId,userID,variables).then(res => {
            console.log("Email Sent")
          })
          .catch(err => console.error("Submission Error. Error details: ", err))
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
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)} >
                <ul className="contact-form-ul">
                <div className="name-and-email">
                  <li className="name">
                    <input 
                    className="name-input" 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    {...register("name", { 
                            required: true
                        })
                    }
                 />
                 
                  </li>
                  <li className="email">
                    <input 
                    className="email-input" 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    {...register("email",{
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          })
                    }
                    />
                  </li> 
                </div>
                <li className="subject">
                <input 
                className="subject-input" 
                type="subject" 
                name="subject" 
                placeholder="Subject"
                {...register("subject",{
                            required: true
                        })
                    } 
                />
                </li> 
                <li className="message">
                <textarea 
                className="message-input" 
                name="message" 
                placeholder="Message"
                {...register("message", {
                            required: true
                        })
                    } 
                /></li> 
              </ul>
              <div className="btn-container">
                <input className="contact-btn" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="error-messages">
            <label className='error'>
              <p>{errors['name'] && "Please enter your name"} </p>
              <p>{errors.email && "Please enter your email"}</p>
              <p>{errors.subject && "You forgot to add a subject!"}</p> 
              <p>{errors.message && "You forgot to add a message!"}</p> 
            </label>
          </div>
          <div className="map">

          </div>
          </div>
        </div>
      );
}

export default ContactMe;