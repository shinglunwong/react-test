import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    counter: counterReducer,
    visible: modalReducer,
});