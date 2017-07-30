import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import app from '../reducers/app';
import select from '../reducers/select';

const rootReducer = combineReducers({
    app: app,
    select: select,
});

export default function configureStore(initialState) {
    const middlewares = [thunk];

    const reduxLogger = createLogger({
        collapsed: true,
        diff: true,
    });

    middlewares.push(reduxLogger);

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}