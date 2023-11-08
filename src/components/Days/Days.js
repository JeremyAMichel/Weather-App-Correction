import "./Days.css";
import { format, addDays } from "date-fns";

function Days({ handleClickDay }) {

  const currentDate = new Date();

  const days = Array.from({ length: 5 }, (_, index) => addDays(currentDate, index));


  return (
    <>
      {days.map((day, index) => (
        <a
          href="#"
          onClick={handleClickDay}
          key={index}
          id={index}
          className={index === 0 ? 'clickedDay' : ''}
        >
          {format(day, 'EEEE')}
        </a>
      ))}
    </>
  );
}

export default Days;
