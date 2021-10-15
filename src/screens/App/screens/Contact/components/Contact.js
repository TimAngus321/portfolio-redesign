import { React, useRef } from 'react';
import { toast } from 'react-toastify';
import { emailjs, send } from 'emailjs-com';
// import { useForm, useFormState } from "react-hook-form";

import useForm from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/lib/useForm.js';


toast.configure();

const ContactMe = () => {
  const form = useRef();

  const {inputs, handleChange } = useForm({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });



  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputs.email)

    if(!inputs.email || !inputs.message){
      notifyErrors();
    } else {
      sendEmail();
      successMessageTest();
    }

  }

   

    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    const sendEmail = (e) => {


      console.log(inputs.email)

        send(
          serviceID,templateId,inputs,userID).then(res => {
            // emailjs.send.reset();
            console.log(res.text)
          })
          .catch(err => console.error("Submission Error. Error details: ", err))
         
      }
    

  

        const notifyErrors = () => {
          toast.error('😨 Please fill in all the form fields!',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true 
          });
        }
  
        const successMessageTest = () => {
          toast.success(`😀 Thank you ${inputs.name} for your message!`,
          {position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true });
        }

      
 

 





    // const onSubmit = (e) => {
    //       e.preventDefault();

    //   



    //     // let fields = inputs;
    //         // let errors = {};
    //         // let isFormValid = true;

    //         if(!inputs["email"] || !inputs["message"]){
    //             notifyErrors();
    //         } else {
    //             sendForm();
    //         }

    //     }

    //     const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    //     const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    //     const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    //     // const sendEmail = (e) => {
       
    //     const sendForm = (e) => {

    //         let { value, name} = e.target;

    //         e.preventDefault();
    //         emailjs.send(
    //           serviceID,templateId,userID,inputs).then(res => {
    //             successMessageTest();
    //             // emailjs.send.reset();
    //           })
    //           .catch(err => console.error("Submission Error. Error details: ", err))
          

    //         emailjs.sendForm(serviceID, templateId, '.contact-form', {from_name: inputs.name, name: inputs.name, email: inputs.email, subject: inputs.subject, message: inputs.message }, userID);
    //       console.log("Email Sent")
    //       toast.success(`😀 Thank you ${inputs.name} for your message!`,
    //       {position: toast.POSITION.BOTTOM_RIGHT,
    //         hideProgressBar: true });
    //       }

        
        

  
       
  
      
  
    //     // Stop allowing submissions after 2 to prevent spamming and overloading emailJS. 
  
    //     const notifyMessageReceived = () => {
    //       toast.warning('🔂 I have received your message. I will get back to you!',
    //       {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //         hideProgressBar: true 
    //       });
    //     }
      

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
            <form className="contact-form"  >
                <ul className="contact-form-ul">
                <div className="name-and-email">
                  <li className="name">
                    <input 
                    className="name-input" 
                    type="name" 
                    name="name" 
                    placeholder="Name"
                    value={inputs.name}
                    // {...register("name", { 
                    //         required: true,
                    //     })
                    // }
                    // onChange={handleChange}
                 
                    onChange={handleChange}
                 />
                 
                  </li>
                  <li className="email">
                    <input 
                    className="email-input" 
                    name="email" 
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleChange}
                    // {...register("email", {
                    //         required: true,
                    //         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    //       })
                    // }
                    />
                  </li> 
                </div>
                <li className="subject">
                <input 
                className="subject-input" 
                name="subject" 
                placeholder="Subject"
                value={inputs.subject}
                onChange={handleChange}
                // {...register("subject",{
                //             required: true,
                //         })
                //     } 
                />
                </li> 
                <li className="message">
                <textarea 
                className="message-input" 
                name="message" 
                placeholder="Message"
                value={inputs.message}
                onChange={handleChange}
                // {...register("message", {
                //             required: true,
                //         })
                //     } 
                /></li> 
              </ul>
              <div className="btn-container">
                <input ref={form} onClick={onSubmit} className="contact-btn" type="submit" value="Send" />
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