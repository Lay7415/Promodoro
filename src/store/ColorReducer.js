import { createSlice } from "@reduxjs/toolkit"
const ColorReducer = createSlice({
    name:'formreducer',
    initialState: {
        ChangeColorWebsiteData:{websiteColor:'blue'}
    },
    reducers:{
        ConsoleLog(state,action) {
            console.log(state)
            console.log(action)
        },
        ChangeColorMenu(state,action) {
            state.colorDataWebSite = action.payload
        },
    }
})
export const ColorReducerActions = ColorReducer.actions;
export default ColorReducer