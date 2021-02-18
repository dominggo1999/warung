import React from 'react';
import './styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
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
      </Switch>
    </div>
  );
};

export default App;
