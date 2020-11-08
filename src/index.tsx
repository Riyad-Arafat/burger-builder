import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { HashRouter as Router } from 'react-router-dom';
import 'assets/index.css';
import {App} from './App';

import {store} from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);