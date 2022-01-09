import { React, useRef, useState } from "react";
import { toast } from "react-toastify";
import { send } from "emailjs-com";
import useForm from "/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/lib/useForm.js";

toast.configure();

const ContactMe = () => {
  const form = useRef();

  const { inputs, handleChange, clearForm } = useForm();
  const [subCount, setSubCount] = useState(0);
  const [allowRedoMessage, setAllowRedoMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!inputs.email || !inputs.message || !inputs.name || !inputs.subject) {
      notifyErrors();
    } else if (!emailReg.test(inputs.email)) {
      notifyEmailIssue();
    } else if (subCount === 0 && !allowRedoMessage) {
      sendEmail();
      notifySuccess();
      clearForm();
    } else if (subCount === 1 && !allowRedoMessage) {
      sendEmail();
      notifyLastAttempt();
      clearForm();
      setAllowRedoMessage(true);
    } else if (allowRedoMessage === true) {
      allowRedoMesage();
      sendEmail();
      setAllowRedoMessage(false);
    } else {
      notifyMessageReceived();
    }
  };

  const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const sendEmail = () => {
    send(serviceID, templateId, inputs, userID)
      .then((res) => {
        // emailjs.send.reset();
        console.log(res.text);

        // After successful submission update submission count state
        setSubCount(subCount + 1);
        console.log(subCount);
      })
      .catch((err) =>
        console.error("Submission Error. Error details: ", err, notifyFailure())
      );
  };

  const notifyErrors = () => {
    toast.error("😨 Please fill in all the form fields!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifySuccess = () => {
    toast.success(`😀 Thank you ${inputs.name} for your message!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifyEmailIssue = () => {
    toast.warning(
      `There is a problem with your email. Please check it is correct`,
      { position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true }
    );
  };

  const notifyFailure = () => {
    toast.error(
      `Unforutnately there was a problem sending your message. Please try again later.`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
      }
    );
  };

  // Stop allowing submissions after 2 to prevent spamming and overloading emailJS. If they need to correct something allow them to click within the notification to send again.

  const notifyMessageReceived = () => {
    toast.warning(`🙏 I have received your message. I will get back to you!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifyLastAttempt = () => {
    toast.success(`😀 Thank you ${inputs.name} for your message!. I will get back to you! Your next message will be your last attempt. Take care!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
      autoClose: 20000,
    });
  };

  const allowRedoMesage = () => {
    toast.warning(`🙏 This was your last attempt to redo the message. If you still made an error don't worry I will get back to you regardless`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
      autoClose: 20000,
    });
  };

  return (
    <div className="page-container-fixed">
      <div className="contact-component">
        <div className="form-item">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-blurb">
            Please feel free to contact me regarding React, Shopify, Javascript and Rails projects and positions. 
            Send me a message with this form and I'll get back to you and let you know if I can help you with your
             project or be a good fit for your company.  
          </p>
          <form className="contact-form">
            <ul className="contact-form-ul">
              <div className="name-and-email">
                <li className="name">
                  <input
                    className="name-input"
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={inputs.name}
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
                />
              </li>
              <li className="message">
                <textarea
                  className="message-input"
                  name="message"
                  placeholder="Message"
                  value={inputs.message}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <div className="btn-container">
              <input
                ref={form}
                onClick={onSubmit}
                className="contact-btn"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default ContactMe;
