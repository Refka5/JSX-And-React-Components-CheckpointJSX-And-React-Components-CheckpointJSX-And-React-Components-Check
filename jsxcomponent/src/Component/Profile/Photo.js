import photoprofile from "../../img/photoimg.PNG";
// import "./photoprofile.css";

function Photo() {
  return (
    <img
      className="card__image"
      width="600"
      src={photoprofile}
      alt="This is my photoprofile"
    />
  );
}
export default Photo;
