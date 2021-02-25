import React, { useState, useEffect } from 'react';
import './styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // Kalau sign out kembalikan user state ke null
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
