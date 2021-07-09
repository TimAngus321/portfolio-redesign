import { React } from 'react';
import { emailjs } from 'emailjs-com';
// import { useForm, useFormState } from "react-hook-form";
import { toast } from 'react-toastify';
import useForm from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/lib/useForm.js';


toast.configure();

const ContactMe = () => {

  const {inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const { register, reset, handleSubmit, control, formState } = useForm();
  // const {submitCount} = formState;

  // React.useEffect(() => {
  //   // console.log("formState Info", formState.errors);
  // },[formState]);


  // const { dirtyFields, errors } = useFormState({ 
  //   control
  // });

  function handleValidation() {
    let fields = inputs;
    let errors = {};
    let isFormValid = true;

    if(!fields["email"]){
      notifyErrors();
    }
  }

  const onSubmit = (inputs, e) => {
      e.preventDefault();
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;


      sendForm(serviceID, templateId, {from_name: inputs.name, name: inputs.name, email: inputs.email, subject: inputs.subject, message: inputs.message }, userID);
      console.log("Email Sent")
      toast.success(`😀 Thank you ${inputs.name} for your message!`,
      {position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true });
      }

      const test = (inputs) => {
          toast.success(`😀 Thank you ${inputs.name} for your message!`,
          {position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true });
      }

      const sendForm = (serviceID, templateId, userID, variables) => {
        emailjs.send(
          serviceID,templateId,userID,variables).then(res => {
            console.log("Email Sent")
            emailjs.send.reset();
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
            <form className="contact-form" onSubmit={onSubmit} >
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
                <input onClick={handleValidation} className="contact-btn" type="submit" value="Send" />
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