export default function Feedback({
  feedback: { good, neutral, bad },
  total,
  percentage,
}) {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {percentage}%</p>
      </li>
    </ul>
  );
}
