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

const StyledTextLoop = cxs(TextLoop)({
    display: "flex",
});

class QuoteLoop extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Trade faster", "Increase sales"],
            interval: 0,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                options: [
                    "Trade faster",
                    "Increase sales",
                    "Stock winners",
                    "Price perfectly",
                ],
            });
            console.log("change options");
        }, 10000);

        setTimeout(() => {
            this.setState({
                interval: 1000,
            });

            console.log("start");
            setTimeout(() => {
                this.setState({
                    interval: 0,
                });
                console.log("stop");
            }, 10000);
        }, 5000);
    }

    render() {
        const { options, interval } = this.state;

        return (
            <div>
                <Section>
                    <Quotes>
                    <span className="pre-loop-quote">                    
                    <p>"Hi,</p>
                    <p>I'm Tim,</p>
                    </span>
                        <TextLoop className="looping-quote" mask={true} fade={false}>
                            <span>front-end developer"</span>
                            <span>backend developer"</span>
                            <span>full-stack developer"</span>
                            <span>music lover"</span>
                        </TextLoop>
                    </Quotes>
                </Section>
                {/* <Section>
                    <Quotes>
                    "I am <br/>
                        <StyledTextLoop mask={true} fade={false} className="transition-quotes">
                            <span>&nbsp;always</span>
                            <span>&nbsp;never</span>
                            <span>&nbsp;continuously</span>
                        </StyledTextLoop>
                        <br/>
                        <StyledTextLoop delay={500} mask={true} fade={false} className="transition-quotes">
                            <span>&nbsp;learning</span>
                            <span>&nbsp;satisfied</span>
                            <span>&nbsp;building </span>
                        </StyledTextLoop>
                        <br/>
                        <StyledTextLoop delay={1000} mask={true} fade={false} className="transition-quotes">
                            <span>&nbsp;something new."</span>
                            <span>&nbsp;with my skillset."</span>
                            <span>&nbsp;projects."</span>
                        </StyledTextLoop>
                    </Quotes>
                </Section> */}
            </div>
        );
    }
}

export default QuoteLoop;