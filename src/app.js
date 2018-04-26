import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import store from './store';

import Home from 'scenes/home';

if (process.env.NODE_ENV === 'development') {
    window._Store = store;
}

class App extends Component {
    render() {
        return <Provider store={store}>
            <BrowserRouter basename="">
                <div className="app">
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        </Provider>
    }
}

export default App;