import "./Days.css";

function Days({ handleClickDay }) {
  return (
    <>
      <a href="#" className="clickedDay" onClick={handleClickDay} >
        Thursday
      </a>
      <a href="#" onClick={handleClickDay} >Friday</a>
      <a href="#" onClick={handleClickDay} >Saturday</a>
      <a href="#" onClick={handleClickDay} >Sunday</a>
      <a href="#" onClick={handleClickDay} >Monday</a>
    </>
  );
}

export default Days;
