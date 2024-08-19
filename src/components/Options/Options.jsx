export default function Options({
  feedbackTypes: [good, neutral, bad],
  onUpdateFeedback,
  total,
  onResetFeedback,
}) {
  return (
    <div>
      <button onClick={() => onUpdateFeedback(good)}>Good 🙂</button>
      <button onClick={() => onUpdateFeedback(neutral)}>Neutral 😐</button>
      <button onClick={() => onUpdateFeedback(bad)}>Bad 🙃</button>
      {total > 0 && <button onClick={() => onResetFeedback()}>Reset 🔄</button>}
    </div>
  );
}
