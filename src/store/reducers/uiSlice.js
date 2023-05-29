import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // today:"23/5/2023",
    // selectedDate:"23/5/2023",
    today:new Date().toLocaleDateString(),
    selectedDate:new Date().toLocaleDateString(),
    dayList:[]
};


const uiSlice = createSlice({
    name: "uiSlice",
    initialState,
    reducers: {

        // get week list
        getWeekDetails(state,action){
            let currDDMMYY =state.selectedDate;
            let [dd,mm,yy]=currDDMMYY.split("/");
            let curr=new Date(`${mm}/${dd}/${yy}`);
            let week = []
            for (let i = 1; i <= 7; i++) {
              let first = curr.getDate() - curr.getDay() + i 
              let day = new Date(curr.setDate(first)).toLocaleDateString()
              if(i!==6 && i!==7){
                  week.push(day)
              }
            }
            state.dayList=week
        },
        // move to next week
        getNextWeek(state,action){
            let currDDMMYY =state.selectedDate;
            let [dd,mm,yy]=currDDMMYY.split("/");
            let curr=new Date(`${mm}/${dd}/${yy}`);
            
            curr.setDate(curr.getDate() + 7);
            state.selectedDate=curr.toLocaleDateString()
        },
        // move to previous week
        getPreviusWeek(state,action){
            let currDDMMYY =state.selectedDate;
            let [dd,mm,yy]=currDDMMYY.split("/");
            let curr=new Date(`${mm}/${dd}/${yy}`);
            curr.setDate(curr.getDate() - 7);
            state.selectedDate=curr.toLocaleDateString()
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer