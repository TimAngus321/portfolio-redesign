import useHome from "../hooks/useHome";
// import DancingLines from "react-dancing-lines";
import styles from "../style/homeStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";
import QuoteLoop from "../components/QuoteLoop";
import DancingLinesMyEdit from "react-dancing-lines-safari-firefox-support";
import { motion } from "framer-motion";

const Home = () => {
  const { navigate } = useHome();
  return (
    <motion.main
      className={styles?.pageContainerHome}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title={`Tim Angus's Porftolio - Home Page`}
        description={`This is the home page of the portfolio of Timothy Angus who also goes by Tim Angus. Find out more about Tim Angus, navigate around Tim's site, enjoy the new animations and get in contact with Tim if he can help you with your project or at your company!`}
        link={`https://tim-angus.com`}
      />
      <DancingLinesMyEdit backgroundColor="rgb(30,30,30)" />
      <section className={styles?.photoQuote}>
        <div className={styles?.allHeadingsBtn}>
          <div className={styles?.animatedQuotes}>
            <QuoteLoop />
          </div>
          <p className={styles?.subHeading}>
            Full-Stack / React / Express / Rails / Shopify
          </p>
          <button className="default-btn" onClick={(e) => navigate("/contact")}>
            Contact Me
          </button>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
