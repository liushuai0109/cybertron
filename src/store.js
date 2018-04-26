import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {reducer as dialog} from 'components/dialog';
import {reducer as home} from 'scenes/home';

const appReducer = combineReducers({
    dialog,
    home
});

export default createStore(
    appReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
);