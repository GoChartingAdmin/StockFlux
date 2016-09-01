import { combineReducers } from 'redux';

import childWindows from './childWindows';
import dragOut from './dragOut';

const rootReducer = combineReducers({
    childWindows,
    dragOut
});

// Wrap the reducer in dev to freeze the state and action
const checkImmutable = (reducer) => {
    if (process.env.NODE_ENV === 'production') {
        return require('./reducers.prod').default(reducer);     // eslint-disable-line global-require
    }
    return require('./reducers.dev').default(reducer);          // eslint-disable-line global-require
};

export default checkImmutable(rootReducer);
