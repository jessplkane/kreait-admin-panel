import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import rootReducer from './reducers';
import './App.css';
import AdminPanel from './components/AdminPanel';
import LogIn from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/login" component={LogIn} />
          <PrivateRoute path="/admin-panel" component={AdminPanel} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
