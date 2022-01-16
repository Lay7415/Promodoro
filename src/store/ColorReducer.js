import { createSlice } from "@reduxjs/toolkit"
const ColorReducer = createSlice({
    name:'formreducer',
    initialState: {
        ChangeColorWebsiteData:{backgound:'red', blackEffect:'red'}
    },
    reducers:{
        ConsoleLogC(state,action) {
            console.log(state)
            console.log(action)
        },
        ChangeColorMenu(state,action) {
            state.ChangeColorWebsiteData = action.payload
        },
    }
})
export const ColorReducerActions = ColorReducer.actions;
export default ColorReducer