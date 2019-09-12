import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import adminPanel from './reducers';
import './App.css';
import AdminPanel from './components/AdminPanel';
import LogIn from './components/LogIn';
import Users from './components/Users';
import Posts from './components/Posts';
import PrivateRoute from './components/PrivateRoute';

const store = createStore(adminPanel);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/admin-panel/users" component={Users} />
            <Route path="/admin-panel/posts" component={Posts} />
          </Switch>
          <PrivateRoute path="/admin-panel" component={AdminPanel} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
