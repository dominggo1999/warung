import React from 'react';
import './styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={Homepage}
        />
        <Route
          path="/shop"
          component={ShopPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
      </Switch>
    </div>
  );
};

export default App;
