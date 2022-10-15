export default function AnimationBtn({ text }) {
  return (
    <span style={{ textTransform: "capitalize",color:"white"}}>
      {text} <i className="fa fa-spinner fa-spin" style={{color:"white"}}></i>
      <span></span>
    </span>
  );
}
