import React from 'react';
import emailjs, { send } from 'emailjs-com';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


toast.configure();

const ContactMe = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data, e) => {
      e.preventDefault();
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      if (!errors.name && !errors.email && !errors.subject && !errors.message) {
      sendForm(serviceID, templateId, {from_name: data.name, name: data.name, email: data.email, subject: data.subject, message: data.message }, userID);
      console.log("Email Sent")
      toast(`Thank you ${data.name} for your message!`);
      e.target.reset();
      } else {
        notify();
      }
      }

      const sendForm = (serviceID, templateId, userID, variables) => {
        if (!errors.name && !errors.email && !errors.subject && !errors.message) {
        emailjs.send(
          serviceID,templateId,userID,variables).then(res => {
            console.log("Email Sent")
            send.reset();
          })
          .catch(err => console.error("Submission Error. Error details: ", err))
        }
      }

      const notify = () => {
        toast('Please fill in all the required fields!');
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
                    type="name" 
                    name="name" 
                    placeholder="Name"
                    {...register("name", { 
                            required: true,
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
                    {...register("email", {
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
                            required: true,
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
                            required: true,
                        })
                    } 
                /></li> 
              </ul>
              <div className="btn-container">
                <input onClick={notify} className="contact-btn" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="map">
          </div>
          </div>
        </div>
      );
}

export default ContactMe;