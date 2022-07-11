import counterReducer from './Features/Counter/reducer';
import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

let rootReducers = combineReducers ({
    counter : counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;