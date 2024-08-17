export default function Feedback({ props }) {
  return <div>{props ? <div></div> : <p>No feedback yet</p>}</div>;
}
