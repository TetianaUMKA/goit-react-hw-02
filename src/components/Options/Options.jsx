export default function Options({
  feedbackTypes: [good, neutral, bad],
  onUpdateFeedback,
  total,
}) {
  return (
    <div>
      <button onClick={() => onUpdateFeedback(good)}>Good 🙂</button>
      <button onClick={() => onUpdateFeedback(neutral)}>Neutral 😐</button>
      <button onClick={() => onUpdateFeedback(bad)}>Bad 🙃</button>
      {total > 0 && <button>Reset 🔄</button>}
    </div>
  );
}
