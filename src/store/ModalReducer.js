import { createSlice } from "@reduxjs/toolkit"
const ModalWindow = createSlice({
    name:'timeReducer',
    initialState: {
        settingModal:false,
        banModal:false,
        next: false,
        checkedColorWithModal: '',
    },
    reducers:{
        clickActiveSettingModal(state) {
            state.settingModal = !state.settingModal
        },
        clickActiveBanModal(state) {
            state.banModal = !state.banModal
        },
        changeNextValue(state,action) {
            state.next = action.payload
        },
        checkColorWithModalValue(state,action) {
            state.checkedColorWithModal = action.payload
        },
    }
})
export const ModalWindowActions = ModalWindow.actions;
export default ModalWindow