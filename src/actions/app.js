import {createAction} from 'redux-actions';
import * as actionTypes from './action-types';
import Client from '../utils/Client';

export const fetchTransportDetailsRequest = createAction(actionTypes.FETCH_TRIP_DETAILS_REQUEST);
export const fetchTransportDetailsSuccess = createAction(actionTypes.FETCH_TRIP_DETAILS_REQUEST_SUCCESS);

export const fetchTransportDetails = () => (dispatch) => {
    Client.getDataTrip().then(response => {
        response.json().then(fileData => {
            return dispatch(fetchTransportDetailsRequest(fileData));
        });
    });
};
