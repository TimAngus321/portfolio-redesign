import QuoteLoop from "../components/quote-text-loop";
import vinylPlayer from "../images/vinylPlayer.gif";
import useHome from "../hooks/useHome";
import DancingLines from "react-dancing-lines";
import styles from "../style/homeStyle.module.scss";
import SEO from '../../../components/SEOComponent/SEO';

const Home = () => {
  const { navigate } = useHome();
  return (
    <section className={styles?.pageContainerHome}>
      <SEO
        title={`Tim Angus's Porftolio - Home Page`}
        description={`Home page of Timothy Angus's portfolio. Find out more about Tim Angus, navigate around my site and enjoy the new animations!`}
        link={`https://tim-angus.com`}
        />
      <DancingLines backgroundColor="rgb(30,30,30)" />
      <div className={styles?.photoQuote}>
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
        {/* 
        Removed as new animation added
        <div className={styles?.timLogo}>
          <img src={vinylPlayer} alt="Vinyl Player" />
        </div> 
        */}
      </div>
    </section>
  );
};

export default Home;
