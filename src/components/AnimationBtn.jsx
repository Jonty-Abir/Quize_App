export default function AnimationBtn({ text }) {
  return (
    <span style={{ textTransform: "capitalize" }}>
      {text} <i className="fa fa-spinner fa-spin"></i>
      <span></span>
    </span>
  );
}
