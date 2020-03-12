
import actionReducer from './actionsReducer';
import alertReducer from './alertReducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'phonebook',
    storage,
    whitelist:['action','alert']//persist the following states
  }

const rootReducer = combineReducers({
    action: actionReducer,
    alert: alertReducer
});
export default persistReducer(persistConfig,rootReducer);