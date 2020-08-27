import React from 'react';
import QuoteLoop from './quote-text-loop';


function Home() {
      return (
          <div className="photo-quote-component">
          <div className="photo-quote">

                  <p className="animated-quotes react-reveal"> 
                  <QuoteLoop />
                  </p>

              <div className="tim-logo">
                  <h1>T / A</h1>
              </div>
              </div>
          </div>   
      )
  }


export default Home;