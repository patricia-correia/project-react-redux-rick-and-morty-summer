import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extensions';
import rootReducers from "../reducers";

const store = createStore( rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

