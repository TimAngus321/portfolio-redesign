import React from 'react';
import { emailjs } from 'emailjs-com';
import { useForm, useFormState } from "react-hook-form";
import { toast } from 'react-toastify';


toast.configure();

const ContactMe = () => {

  // const [name, setName] = useState('');

  const { register, reset, handleSubmit, control, formState } = useForm();
  const {submitCount} = formState;

  // React.useEffect(() => {
  //   // console.log("formState Info", formState.errors);
  // },[formState]);


  const { dirtyFields, errors } = useFormState({ 
    control
  });

  const onSubmit = (data, e) => {
      e.preventDefault();
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      if (errors.length === 0)  {
      sendForm(serviceID, templateId, {from_name: data.name, name: data.name, email: data.email, subject: data.subject, message: data.message }, userID);
      console.log("Email Sent")
      toast.success(`😀 Thank you ${data.name} for your message!`,
      {position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true });
      reset();
      } else if (errors.length !== 0) {
        console.log(errors)
        notifyErrors();
      } else if (submitCount > 2) {
        console.log(submitCount)
        notifyMessageReceived();
      }
      }

      const test = (data) => {
        console.log(dirtyFields);
        console.log(errors)
        if ( errors.length !== 0) {
          notifyErrors();
        } else {
          toast.success(`😀 Thank you ${data.name} for your message!`,
          {position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true });
        }

      }

      const sendForm = (serviceID, templateId, userID, variables) => {
        if (!errors) {
        emailjs.send(
          serviceID,templateId,userID,variables).then(res => {
            console.log("Email Sent")
            emailjs.send.reset();
          })
          .catch(err => console.error("Submission Error. Error details: ", err))
        }
      }

      const notifyErrors = () => {
        toast.error('😨 Please fill in all the form fields!',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true 
        });
      }

      const notifyMessageReceived = () => {
        toast.warning('🔂 I have received your message. I will get back to you!',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true 
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
                <input onClick={ test } className="contact-btn" type="submit" value="Send" />
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