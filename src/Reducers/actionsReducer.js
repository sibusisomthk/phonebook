import * as actionTypes from '../Constants/Types/actionTypes';

const initialState = {
    phoneBooks: [],
    contacts: []
}
const actionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PHONEBOOK:
            return {
                ...state,
                phoneBooks: action.payload,
            }
        case actionTypes.UPDATE_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            }
        default:
            return state
    }
};
export default actionsReducer;