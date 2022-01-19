import { createSlice } from "@reduxjs/toolkit"
const TimerReducer = createSlice({
    name:'timeReducer',
    initialState: {
        timeSettingData: {
            longBreak: 1,
            longBreakInt: 2,
            pomodoro: 1,
            shortBreak: 1,
            autoStart: false,
            autoBreak:false,
        },
        timerType: 'pomodoro',
        minutes: 24,
        seconds: 60,
        count: 0,
        pause: false,
        firstClick: 0,
    },
    reducers:{
        decrementFirstClick(state) {
            state.firstClick = state.firstClick + 1;
        },
        updateFirstClick(state) {
            state.firstClick = 0
        },
        changeTimeSetting(state,action) {
            console.log(action)
            state.timeSettingData = action.payload.timeSettingData
        },
        defineTimer(state,action) {
            state.timerType = action.payload
        },
        incrementCount(state) {
            state.count = state.count +  1;
        },
        newCount(state) {
            state.count = 0
        },
        changePauseValue(state,action) {
            state.pause = action.payload
            console.log(action)
        },
        changeTimerToPomodoro(state) {
            state.minutes = state.timeSettingData.pomodoro
        },
        changeTimerToShortBreak(state) {
            state.minutes = state.timeSettingData.shortBreak
        },
        changeTimerToLongBreak(state) {
            state.minutes = state.timeSettingData.longBreak
        },
        updateSeconds(state) {
            state.seconds = 60
        },
        decrementSeconds(state) {
            state.seconds = state.seconds - 1
        },
        decrementMinutes(state) {
            state.minutes = state.minutes - 1
        }
    }
})
export const TimerReducerActions = TimerReducer.actions;
export default TimerReducer