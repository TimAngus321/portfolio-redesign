import QuoteLoop from '../components/quote-text-loop';
import vinylPlayer from '../images/vinylPlayer.gif'
import useHome from '../hooks/useHome';
import DancingLines from 'react-dancing-lines';

function Home() {

  const { navigate } = useHome();
      return (
          <div className="page-container-fixed">
          <DancingLines backgroundColor="rgb(30,30,30)" />
          <div className="photo-quote">
            <div className="all-headings-btn">
                  <p className="animated-quotes"> 
                  <QuoteLoop />
                  </p>
                  <p className="sub-heading">
                    Full-Stack / React / Express / Rails / Shopify  
                  </p>
                    <div className="contact-btn" onClick={(e) => navigate('/contact')}>
                      Contact Me
                    </div>
                  </div>
              <div className="tim-logo">
                  {/* <img src={vinylPlayer} alt="Vinyl Player" /> */}
              </div>
              </div>
          </div>   
      )
  }

export default Home;