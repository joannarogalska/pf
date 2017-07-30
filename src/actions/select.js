import {createAction} from 'redux-actions';
import * as actionTypes from './action-types';

export const changeSelectFrom = createAction(actionTypes.SELECT_FROM_VALUE_CHANGED);
export const changeSelectTo = createAction(actionTypes.SELECT_TO_VALUE_CHANGED);
export const changeOption = createAction(actionTypes.OPTION_CHANGED);
export const resetAllValues = createAction(actionTypes.RESET_ALL_VALUES);