import QuoteLoop from "../components/quote-text-loop";
import vinylPlayer from "../images/vinylPlayer.gif";
import useHome from "../hooks/useHome";
import DancingLines from "react-dancing-lines";
import styles from '../style/homeStyle.module.scss';

const Home = () => {
  const { navigate } = useHome();
  return (
    <div className={styles?.pageContainerFixedHome}>
      <DancingLines backgroundColor="rgb(30,30,30)" />
      <div className={styles?.photoQuote}>
        <div className={styles?.allHeadingsBtn}>
          <p className={styles?.animatedQuotes}>
            <QuoteLoop />
          </p>
          <p className={styles?.subHeading}>
            Full-Stack / React / Express / Rails / Shopify
          </p>
          <button className={styles?.contactBtn} onClick={(e) => navigate("/contact")}>
            Contact Me
          </button>
        </div>
        <div className={styles?.timLogo}>
          {/* <img src={vinylPlayer} alt="Vinyl Player" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
