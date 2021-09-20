import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './index.css';
import { reducer } from './store/reducer';
import browserHistory from './browser-history';

const store = createStore(
  reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
);