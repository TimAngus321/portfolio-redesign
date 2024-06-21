import TextLoop from "react-text-loop";
import styles from "../style/quoteLoopStyle.module.scss";
import useQuoteLoop from '../hooks/useQuoteLoop';

const QuoteLoop = () => {
  const { quoteLoopText } = useQuoteLoop();

  return (
    <section>
      <span className={styles?.preLoopQuote}>
        <p>Hi</p>
        <p>I'm Tim a</p>
      </span>
      <TextLoop
        className={styles?.quoteLoop}
        mask={true}
        fade={true}
        interval={4000}
        children={quoteLoopText}
      />
    </section>
  );
};

export default QuoteLoop;
