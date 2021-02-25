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
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrenUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // Kalau sign out kembalikan user state ke null
        setCurrenUser(userAuth);
      }
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
