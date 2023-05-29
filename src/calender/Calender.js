import React, { memo } from "react";
import { useSelector } from "react-redux";
import "./Calender.css";
import TimePicker from "./timePicker/TimePicker";

const Calender = () => {
  const [selectedDate, dayList,today] = useSelector((store) => [
    store.selectedDate,
    store.dayList,
    store.today,
  ]);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div>
      <div className="row">
        {dayList.map((day, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className={`col-12 col-sm-2 text-center dayBackground ${
                  selectedDate === day && "SelectedDayBackground"
                } ${i === 0 && "rounded-top"} ${
                  i === dayList.length - 1 && "rounded-bottom"
                }`}
              >
                <div className="py-3">
                  <h6 className="fw-light">{days[i]}</h6>
                  <h6>{day}</h6>
                </div>
              </div>
              <div className="col-12 col-sm-10">
                <TimePicker day={day} today={today}/>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Calender);
