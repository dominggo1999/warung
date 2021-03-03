import React, { useState, useEffect } from 'react';
import './styles/style.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Checkout from './pages/Checkout';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

const App = ({ currentUser, setCurrentUser }) => {
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
          exact
          path="/checkout"
          component={Checkout}
        />
        <Route
          exact
          path="/register"
          render={() => (currentUser ? <Redirect to="/" /> : <RegisterPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
