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
        <div className={styles?.formItem}>
          <header>
            <h1 className={styles?.contactTitle}>Contact Me</h1>
            <p className={styles?.contactBlurb}>
              Please feel free to contact me regarding projects I could help you
              with or positions where you think I might be a good fit. I am very
              experienced with Next, React, Nuxt, Vue, React Native, Express and
              I also have worked with many other javascript frameworks and
              libraries so please ask! Additionally I can assist with Ruby
              projects and I am very expereinced in the Shopify ecosystem and
              have experience working with Express, Rails and Grape backends for
              Shopify.
              <br /> <br />
              Send me a message with this form and I'll let you know if I can
              help you with your project or be a good fit for your company.
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
        <div className="map"></div>
      </div>
    </section>
  );
};

export default ContactMe;
