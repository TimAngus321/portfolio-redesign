import QuoteLoop from '../components/quote-text-loop';
import vinylPlayer from '../images/vinylPlayer.gif'
import useHome from '../hooks/useHome';

function Home() {

  const { navigate } = useHome();
      return (
          <div className="page-container-fixed">
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
                  <img src={vinylPlayer} alt="Vinyl Player" />
              </div>
              </div>
          </div>   
      )
  }

export default Home;