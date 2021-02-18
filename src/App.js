import React from 'react';
import './styles/style.scss';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <div>
      <Route
        exact
        path="/"
        component={Homepage}
      />
      <Route
        path="/shop"
        component={ShopPage}
      />
    </div>
  );
};

export default App;
