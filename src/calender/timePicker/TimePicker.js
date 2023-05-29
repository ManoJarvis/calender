

const TimePicker = ({day,today}) => {


    let [dayDD,dayMM,dayYY]=day.split("/");
    let selectedDate=new Date(`${dayMM}/${dayDD}/${dayYY}`);

    let [todayDD,todayMM,todayYY]=today.split("/");
    let todayDate=new Date(`${todayMM}/${todayDD}/${todayYY}`);

  if(todayDate>selectedDate){
    return <p className="mt-4 pt-1 ms-3 fw-bold">Past</p>
  } 

  return (
    <div>

    </div>
  )
}
export default TimePicker