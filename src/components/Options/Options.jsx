import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")} className={styles.btn}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={styles.btn}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={styles.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
