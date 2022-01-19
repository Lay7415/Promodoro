import { configureStore } from "@reduxjs/toolkit"
import TimerReducer from "./TimerReducer"
import ModalWindow from "./ModalReducer"
const store = configureStore({
    reducer: {
        timer: TimerReducer.reducer,
        modal:ModalWindow.reducer
    }
})
export default store