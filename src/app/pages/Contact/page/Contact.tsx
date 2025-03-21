import useEmail from "../hooks/useEmail";
import styles from "../style/contactStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";
import Select from "react-select";

const ContactMe = () => {
  const {
    onSubmit,
    inputs,
    handleChange,
    form,
    emailInputfieldWarning,
    nameEmpty,
    emailEmpty,
    subjectEmpty,
    msgEmpty,
  } = useEmail();

  return (
    <section className={styles?.contactPageContainer}>
      <SEO
        title={`Tim Angus's Porftolio - Contact Page`}
        description={`Contact page of Timothy Angus's portfolio. Use the contact form to get in contact with me regarding positions or freelance projects. Error handler uses toast notifcations to warn the user about issues and prevent spamming`}
        link={`https://tim-angus.com/contact`}
      />
      <div className={styles?.contactComponent}>
        <header>
          <h1 className={styles?.contactTitle}>Contact Me</h1>
          <p className={styles?.contactBlurb}>
            Please feel free to contact me regarding projects you need help with
            or positions you need filled. Leave me a message with as much
            information as possible about the project or position so I can get
            back to you quickly with the services you need and how to move
            forward quickly.
          </p>
        </header>
        <form className={styles?.contactForm}>
          <ul className={styles?.contactFormUl}>
            <div className={styles?.nameAndEmail}>
              <li className={styles?.name}>
                <input
                  className={`${styles?.nameInput} ${
                    nameEmpty ? styles?.redWarning : inputs?.name ? null : null
                  }`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={inputs?.name}
                  onChange={handleChange}
                />
              </li>
              <li className={styles?.email}>
                <input
                  className={`${styles?.emailInput} ${
                    emailInputfieldWarning ? styles?.emailWarning : null
                  } ${emailEmpty ? styles?.redWarning : null} `}
                  name="email"
                  placeholder="Email"
                  value={inputs?.email}
                  onChange={handleChange}
                />
              </li>
            </div>
            <li className={styles?.subject}>
              <select
                className={`${styles?.subjectInput} ${
                  subjectEmpty ? styles?.redWarning : null
                }`}
                name="subject"
                // placeholder="Subject"
                value={inputs?.subject}
                onChange={handleChange}
              >
                <option disabled selected>
                  What service are you interested in?
                </option>
                <option value="General Consultation">
                  General Consultation
                </option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="UI/UX Development">
                UI/UX Development
                </option>
                <option value="Full-Stack Development">
                  Full-Stack Development
                </option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Shopify">Shopify</option>
              </select>
            </li>
            <li className={styles?.message}>
              <textarea
                className={`${styles?.messageInput} ${
                  msgEmpty ? styles?.redWarning : null
                }`}
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
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
