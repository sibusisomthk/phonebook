import * as actionTypes from '../Constants/Types/actionTypes';

const initialState = {
    phonebooks: [],
    contacts: [{ firstName: 'Laura', lastName: 'Ashley', phone: '+27817445437', image: null, isFavourite: true },
    { firstName: 'Brienna', lastName: 'Barnes', phone: '0113748833', image: null, isFavourite: false }],
    phones: []
}
const actionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PHONEBOOK:
            return {
                ...state,
                phonebooks: action.payload,
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