import { combineReducers } from 'redux';
import user from '/user';
import characters from './characters';

const rootReducers = combineReducers({user, characters});

export default rootReducers;
