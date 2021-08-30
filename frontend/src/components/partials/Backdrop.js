import "./Backdrop.css";

const Backdrop = ({ show, backdropClickHandler }) => {
  return (
    show && <div className="backdrop" onClick={backdropClickHandler}></div>
  );
};

export default Backdrop;
