import React from "react";
import TextLoop from "./TextLoop.jsx"
import cxs from "cxs/component";
import styles from './quoteLoopStyle.module.scss'

const Quotes = cxs("div")({
    fontSize: "35px",
    color: "white"
});

const Section = cxs("div")({
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
});

class QuoteLoop extends React.PureComponent {
  
    render() {

        return (
            // <div>
                <Section>
                    <Quotes>
                    <span>                    
                    <p className={styles?.preLoopQuote}>Hi</p>
                    <p className={styles?.preLoopQuote}>I'm Tim a</p>
                    </span>
                        <TextLoop className="looping-quote" mask={true} fade={false}>
                            <span>Frontend Developer</span>
                            <span>Full-Stack Developer</span>
                            <span>Shopify Developer</span>
                            <span>Music Lover</span>
                        </TextLoop>
                    </Quotes>
                </Section>
            // </div>
        );
    }
}

export default QuoteLoop;