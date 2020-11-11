import React from "react";
import TextLoop from "./TextLoop.jsx"
import cxs from "cxs/component";

const Quotes = cxs("div")({
    fontSize: "35px",
    color: "white"
});

const Section = cxs("div")({
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
});

class QuoteLoop extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         interval: 0,
    //     };
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             interval: 1000,
    //         });
    //         setTimeout(() => {
    //             this.setState({
    //                 interval: 0,
    //             });
    //         }, 10000);
    //     }, 5000);
    // }

    render() {
         const interval = this.state;

        return (
            // <div>
                <Section>
                    <Quotes>
                    <span className="pre-loop-quote">                    
                    <p>Hi</p>
                    <p>I'm Tim a</p>
                    </span>
                        <TextLoop className="looping-quote" mask={true} fade={false}>
                            <span>front-end developer</span>
                            <span>backend developer</span>
                            <span>full-stack developer</span>
                            <span>music lover</span>
                        </TextLoop>
                    </Quotes>
                </Section>
            // </div>
        );
    }
}

export default QuoteLoop;