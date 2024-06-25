import { useNavigate } from "react-router-dom";
import styles from "../style/homeStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";
import QuoteLoop from "../components/QuoteLoop";
import {
  ShaderGradientCanvas,
  ShaderGradient,
  // @ts-ignore
  useThree,
  // @ts-ignore
  useFrame,
} from "shadergradient";
import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "always",
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={styles?.pageContainerHome}>
      <ShaderGradientCanvas
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
      }}
      onCreated={({ gl }: any) => {
        gl.domElement.style.pointerEvents = 'none'; 
      }}
    >
      <ShaderGradient
        control='query'
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=4.9&cPolarAngle=90&cameraZoom=1&color1=%2300fff0%20&color2=%238da0ce&color3=%23ff810a&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=0.8&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.6&rotationX=0&rotationY=10&rotationZ=120&shader=defaults&toggleAxis=false&type=plane&uDensity=2&uFrequency=5.5&uSpeed=0.3&uStrength=1.5&uTime=0&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
      <SEO
        title={`Tim Angus's Porftolio - Home Page`}
        description={`This is the home page of the portfolio of Timothy Angus who also goes by Tim Angus. Find out more about Tim Angus, navigate around Tim's site, enjoy the new animations and get in contact with Tim if he can help you with your project or at your company!`}
        link={`https://tim-angus.com`}
      />
      <div className={styles?.photoQuote}>
        <div className={styles?.allHeadingsBtn}>
          <div className={styles?.animatedQuotes}>
            <QuoteLoop />
          </div>
          <p className={styles?.subHeading}>
            Full-stack / Frontend / Mobile / Shopify
          </p>
          <button
            className={styles?.homeContactBtn}
            onClick={(e) => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
