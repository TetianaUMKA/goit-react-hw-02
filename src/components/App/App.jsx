import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

function App() {
  const feedbacks = { good: 0, neutral: 0, bad: 0 };
  const savedFeedback = window.localStorage.getItem("saved-feedback");

  const [feedback, setFeedback] = useState(
    savedFeedback === null ? feedbacks : JSON.parse(savedFeedback)
  );

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback(feedbacks);
  };

  return (
    <>
      <div className={css.container}>
        <Description />
        <Options
          onUpdateFeedback={updateFeedback}
          feedbackTypes={["good", "neutral", "bad"]}
          total={totalFeedback}
          onResetFeedback={resetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            percentage={positiveFeedback}
          />
        ) : (
          <Notification text="No feedback yet" />
        )}
      </div>
    </>
  );
}

export default App;
