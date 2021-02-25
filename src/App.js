import React, { useState, useEffect } from 'react';
import './styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrenUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
      setCurrenUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
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
