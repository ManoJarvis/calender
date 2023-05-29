import { useEffect } from "react";
import "./App.css";
import CalenderControls from "./calenderControls/CalenderControls";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/reducers/uiSlice";
import Calender from "./calender/Calender";

function App() {

  const dispatch=useDispatch();
  const selectedDate=useSelector(store=>store.selectedDate);

  useEffect(()=>{
    dispatch(uiActions.getWeekDetails())
  },[dispatch,selectedDate])

  return (
    <div className="container-md mt-3">
      {/* controls */}
      <CalenderControls />      

      {/* timeZone */}
      <div className="my-3">
        <label htmlFor="timeZoneSelector" className="form-label">
          Timezone:
        </label>
        <select id="timeZoneSelector" className="form-select shadow-none" aria-label="Default select example">
          <option defaultValue={0}>Open this select menu</option>
          <option value={1}>One</option>
        </select>
      </div>

      {/* calender */}
      <Calender />
        

    </div>
  );
}

export default App;
