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
              Please feel free to contact me regarding projects or positions you 
              think I might be a good fit. Leave me a message about the project or position
              and I will get back to you. Please provide as much information as you can 
              about the project or position so I can better assist you with your project. 
              <br /> <br />
              I am experienced with Next, React, Nuxt, Vue, React Native, Ruby on Rails and
              Express. While I am most expreinced with the aforementioned frameworks
              I have worked with many other javascript frameworks and libraries so please ask
              if I have experience with your techStack!
              <br /> <br />
              Furthermore, I am expereinced in the  Shopify ecosystem and have 
              experience working on Shopify themes, 3rd party apps, theme portals as well as
              Shopify backend apps using Express, Rails and Grape.
              <br /> <br />
              Send me a message with this form and be sure to check your email is valid and your
              message is detailed so I can best assess whether I can help with your project or 
              be a good fit for your company.
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
