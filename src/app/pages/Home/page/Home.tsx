import QuoteLoop from "../components/quote-text-loop";
import vinylPlayer from "../images/vinylPlayer.gif";
import useHome from "../hooks/useHome";
import DancingLines from "react-dancing-lines";
import styles from "../style/homeStyle.module.scss";
import { Helmet } from "react-helmet";

const Home = () => {
  const { navigate } = useHome();
  return (
    <section className={styles?.pageContainerHome}>
      <Helmet>
        <title>Tim Angus's Porftolio - Home Page</title>
        <meta
          name="og:title"
          content="Tim Angus Home Page - Home Page of Timothy Angus's Developer Porfolio"
        />
        <meta
          name="og:description"
          content="Home page of Timothy Angus's portfolio. Find out more about Tim Angus, navigate around my site and enjoy the new animations!"
        />

        <meta
          name="description"
          content="Home page of Timothy Angus's portfolio. Find out more about Tim Angus, navigate around my site and enjoy the new animations!"
        />
        <meta name="og:url" content="https://tim-angus.com" />
        {/* <meta
          property="og:image"
          content="https://i.ibb.co/1KqZpJ7/Meta-Image-EN.png"
        /> */}
        <link rel="canonical" href="https://tim-angus.com" />
      </Helmet>
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
