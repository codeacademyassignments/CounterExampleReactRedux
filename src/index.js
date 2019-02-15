import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './Reducer/Counter.reducer';

import './index.css';
// import App from './App';
import CounterContainer from './Container/Counter.container';
import * as serviceWorker from './serviceWorker';


const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Counter initialValue = {-10}/>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><CounterContainer /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
