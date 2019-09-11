import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import adminPanel from './reducers';
import './App.css';
import AdminPanel from './components/AdminPanel';
import LogIn from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';

const store = createStore(adminPanel);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <PrivateRoute exact path="/" component={AdminPanel} />
          <Route path="/login" component={LogIn} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
