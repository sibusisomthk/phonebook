//required imports
import * as alertTypes from '../Constants/Types/alertTypes';
import * as service from '../Services/mainService';

//action creators
export function changeSection(section){
    return {
        type: alertTypes.CHANGE_SECTION,
        payload: section
    };
}
export function handleLoader(load){
    return {
        type: load?alertTypes.START_LOADING : alertTypes.STOP_LOADING
    };
}