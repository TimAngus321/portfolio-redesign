import useEmail from "../hooks/useEmail";

const ContactMe = () => {
  const { onSubmit, inputs, handleChange, form } = useEmail();

  return (
    <div className="page-container-fixed">
      <div className="contact-component">
        <div className="form-item">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-blurb">
            Please feel free to contact me regarding React, Javascript/Typescript, Shopify
            and Rails projects and positions. Send me a message with this form
            and I'll let you know if I can help you with your project or be a good fit for your company.
          </p>
          <form className="contact-form">
            <ul className="contact-form-ul">
              <div className="name-and-email">
                <li className="name">
                  <input
                    className="name-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={inputs?.name}
                    onChange={handleChange}
                  />
                </li>
                <li className="email">
                  <input
                    className="email-input"
                    name="email"
                    placeholder="Email"
                    value={inputs?.email}
                    onChange={handleChange}
                  />
                </li>
              </div>
              <li className="subject">
                <input
                  className="subject-input"
                  name="subject"
                  placeholder="Subject"
                  value={inputs?.subject}
                  onChange={handleChange}
                />
              </li>
              <li className="message">
                <textarea
                  className="message-input"
                  name="message"
                  placeholder="Message"
                  value={inputs?.message}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <div className="btn-container">
              <button
                ref={form}
                onClick={onSubmit}
                className="contact-btn"
                type="submit"
                value="Send"
              >Send</button>
            </div>
          </form>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default ContactMe;
