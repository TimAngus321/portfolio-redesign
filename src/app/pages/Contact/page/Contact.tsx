import useEmail from "../hooks/useEmail";
import styles from "../style/contactStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";

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
              Please feel free to contact me regarding projects or positions you 
              need help with. Leave me a message about the project or position
              and I will get back to you. Please provide as much information as you can 
              about the project or position so I can better assist you with your project. 
            </p>
          </header>
          <form className={styles?.contactForm}>
            <ul className={styles?.contactFormUl}>
              <div className={styles?.nameAndEmail}>
                <li className={styles?.name}>
                  <input
                    className={`${styles?.nameInput} ${
                      nameEmpty
                        ? styles?.redWarning
                        : inputs?.name
                        ? null
                        : null
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
                <input
                  className={`${styles?.subjectInput} ${
                    subjectEmpty ? styles?.redWarning : null
                  }`}
                  name="subject"
                  placeholder="Subject"
                  value={inputs?.subject}
                  onChange={handleChange}
                />
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
