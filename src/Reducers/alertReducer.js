import * as alertTypes from '../Constants/Types/alertTypes';
import * as SECTIONS from '../Constants/Enums/pageSection'
const initialState = {
    currentSection: SECTIONS.CONTACTS,
    activeContact: null,
    isLoading: false
}
const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case alertTypes.CHANGE_SECTION:
            return {
                ...state,
                currentSection: action.payload
            }
        case alertTypes.SET_ACTIVE_CONTACT:
            return {
                ...state,
                activeContact: action.payload,
            }
        case alertTypes.START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case alertTypes.STOP_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
};
export default alertReducer;