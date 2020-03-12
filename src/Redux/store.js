import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers/rootReducer';

const logger = store => {
    return next => {
       return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
       }
    }
 };
 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
 const persistor = persistStore(store);

 export {store, persistor};