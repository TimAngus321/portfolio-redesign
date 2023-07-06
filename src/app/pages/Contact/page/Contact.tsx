import useEmail from "../hooks/useEmail";
import styles from '../style/contactStyle.module.scss';

const ContactMe = () => {
  const { onSubmit, inputs, handleChange, form } = useEmail();

  return (
    <div className={styles?.contactPageContainerFixed}>
      <div className={styles?.contactComponent}>
        <div className={styles?.formItem}>
          <h1 className={styles?.contactTitle}>Contact Me</h1>
          <p className={styles?.contactBlurb}>
            Please feel free to contact me regarding React, Javascript/Typescript, Shopify
            and Rails projects and positions. Send me a message with this form
            and I'll let you know if I can help you with your project or be a good fit for your company.
          </p>
          <form className={styles?.contactForm}>
            <ul className={styles?.contactFormUl}>
              <div className={styles?.nameAndEmail}>
                <li className={styles?.name}>
                  <input
                    className={styles?.nameInput}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={inputs?.name}
                    onChange={handleChange}
                  />
                </li>
                <li className={styles?.email}>
                  <input
                    className={styles?.emailInput}
                    name="email"
                    placeholder="Email"
                    value={inputs?.email}
                    onChange={handleChange}
                  />
                </li>
              </div>
              <li className={styles?.subject}>
                <input
                  className={styles?.subjectInput}
                  name="subject"
                  placeholder="Subject"
                  value={inputs?.subject}
                  onChange={handleChange}
                />
              </li>
              <li className={styles?.message}>
                <textarea
                  className={styles?.messageInput}
                  name="message"
                  placeholder="Message"
                  value={inputs?.message}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <div className={styles?.btnContainer}>
              <button
                ref={form}
                onClick={onSubmit}
                className="default-btn"
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
