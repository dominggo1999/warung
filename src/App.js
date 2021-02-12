import React from 'react';
import './styles/style.scss';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div>
      <Route
        path="/"
        component={Homepage}
      />
    </div>
  );
};

export default App;
