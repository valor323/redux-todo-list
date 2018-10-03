import {combineReducers} from 'redux';
import listreducer from './list_reducer';

const rootReducer = combineReducers({
    list: listreducer
});

export default rootReducer;
