import React from 'react';
import QuoteLoop from './quote-text-loop';
import { Link } from 'react-router-dom';
import { routeConstants } from 'shared/constants';

const {
  CONTACT,
} = routeConstants;



function Home() {
      return (
          <div className="photo-quote-component">
          <div className="photo-quote">
            <div className="all-headings-btn">
                  <p className="animated-quotes react-reveal"> 
                  <QuoteLoop />
                  </p>
                  <p className="sub-heading">
                    Full-Stack / Rails / React / JS / Shopify  
                  </p>
                  <Link to={CONTACT.route}>
                    <div className="contact-btn">
                      Contact Me
                    </div>
                  </Link>
                  </div>
              <div className="tim-logo">
                  <h1>T</h1>
              </div>
              </div>
          </div>   
      )
  }


export default Home;