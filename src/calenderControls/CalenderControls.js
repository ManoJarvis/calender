import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../store/reducers/uiSlice";


const CalenderControls = () => {

  const selectedDate=useSelector(store=>store.selectedDate);
  const dispatch=useDispatch();

  const getPreviousWeek=()=>{
    dispatch(uiActions.getPreviusWeek())
  }

  const getNextWeek=()=>{
    dispatch(uiActions.getNextWeek())
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-transparent text-primary border"
            onClick={getPreviousWeek}>
          Previous Week
        </button>
        <span>{selectedDate}</span>
        <button className="btn btn-transparent text-primary border"
            onClick={getNextWeek}>
          Next Week
        </button>
     </div>
  )
}
export default CalenderControls