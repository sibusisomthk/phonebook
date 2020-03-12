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
                page: action.payload,
                isOther: false,
            }
        case actionTypes.UPDATE_CONTACTS:
            return {
                ...state,
                page: action.payload,
                isOther: false,
            }
        default:
            return state
    }
};
export default actionsReducer;