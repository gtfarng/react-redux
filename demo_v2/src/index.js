// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import MyApp from './reducers/index';
import App from './component/tasks/Task';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//export const rootReducer = combineReducers({todo: MyApp})
export const store = createStore(MyApp, applyMiddleware(logger,thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

