import { configureStore } from "@reduxjs/toolkit"
import TimerReducer from "./TimerReducer"
const store = configureStore({
    reducer: {
        timer: TimerReducer.reducer,
    }
})
export default store