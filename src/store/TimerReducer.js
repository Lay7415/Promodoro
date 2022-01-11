import { createSlice } from "@reduxjs/toolkit"
const TimerReducer = createSlice({
    name:'formreducer',
    initialState: {
        data:{}
    },
    reducers:{
        ConsoleLog(state,action) {
            console.log(state)
            console.log(action)
        }
    }
})
export const TimerReducerActions = TimerReducer.actions;
export default TimerReducer