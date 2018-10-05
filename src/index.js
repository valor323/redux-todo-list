import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootreducer from './reducers';
import rPromise from './middleware/r_promise';


const store = createStore( rootreducer, {} , applyMiddleware(rPromise) );

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
