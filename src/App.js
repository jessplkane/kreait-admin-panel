import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import adminPanel from './reducers';
import './App.css';
import AdminPanel from './components/AdminPanel';

const store = createStore(adminPanel);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" />
        <AdminPanel />
      </div>
    </Provider>
  );
}

export default App;
