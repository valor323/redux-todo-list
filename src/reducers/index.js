import {combineReducers} from 'redux';
import listreducer from './list_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    list: listreducer,
    form: formReducer
});

export default rootReducer;
