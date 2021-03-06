import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_LIST_DATA:
            return {...state, all : action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            return {...state, single: action.payload.data.todo};
        case types.CLEAR_SINGLE_ITEM:
            return { ...state, single: {} };
        case types.TOGGLE_COMPLETE:
            console.log('toggle complete action', action);
            return { ...state, single: action.payload.data.todo }
        default:
            return state;
    }
};
