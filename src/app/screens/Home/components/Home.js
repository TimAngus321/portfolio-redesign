import React from 'react';
import QuoteLoop from './quote-text-loop';
import { Link } from 'react-router-dom';
import { routeConstants } from 'shared/constants';
import vinylPlayer from '../images/vinylPlayer.gif'

const {
  CONTACT,
} = routeConstants;

function Home() {
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
                  <Link to={CONTACT.route}>
                    <div className="contact-btn">
                      Contact Me
                    </div>
                  </Link>
                  </div>
              <div className="tim-logo">
                  <img src={vinylPlayer} alt="Vinyl Player" />
              </div>
              </div>
          </div>   
      )
  }

export default Home;