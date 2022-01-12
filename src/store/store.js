import { configureStore } from "@reduxjs/toolkit"
import TimerReducer from "./TimerReducer"
import ColorReducer from "./ColorReducer"
const store = configureStore({
    reducer: {
        timer: TimerReducer.reducer,
        color: ColorReducer.reducer,
    }
})
export default store