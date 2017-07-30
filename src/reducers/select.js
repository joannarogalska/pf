import {handleActions} from 'redux-actions';
import * as actionTypes from '../actions/action-types';

const initialState = {
    from: '',
    to: '',
    option: 'cheapest'
};

export default handleActions({
    [actionTypes.SELECT_FROM_VALUE_CHANGED]: (state, action) => {
        return {
            ...state,
            from: action.payload
        }
    },
    [actionTypes.SELECT_TO_VALUE_CHANGED]: (state, action) => {
        return {
            ...state,
            to: action.payload
        }
    },
    [actionTypes.OPTION_CHANGED]: (state, action) => {
        return {
            ...state,
            option: action.payload
        }
    },
    [actionTypes.RESET_ALL_VALUES]: (state) => {
        return {
            ...state,
            from: '',
            to: '',
            option: 'cheapest'
        }
    },
}, initialState)