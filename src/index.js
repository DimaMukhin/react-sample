import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker, { unregister } from './registerServiceWorker';

import configureStore from './store';
const store = configureStore(window.REDUX_STATE || {});

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <ReduxProvider store={store}>
                <App/>
            </ReduxProvider>,
            document.getElementById('root')
        );
    });
};

unregister();
