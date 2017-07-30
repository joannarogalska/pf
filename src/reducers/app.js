import {handleActions} from 'redux-actions';
import * as actionTypes from '../actions/action-types';

const initialState = {
    tripDetails: false
};

export default handleActions({
    [actionTypes.FETCH_TRIP_DETAILS_REQUEST]: (state, action) => {
        return {
            ...state,
            tripDetails: action.payload,
        }
    }
}, initialState)