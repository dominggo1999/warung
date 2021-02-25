import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth }from '../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link
          to="/"
          className="logo-icon"
        >
          <Logo />
        </Link>
      </div>
      <div className="options">
        <NavLink
          to="/shop"
          className="option"
          activeClassName="selected"
        >
          SHOP
        </NavLink>
        <NavLink
          to="/contact"
          className="option"
          activeClassName="selected"
        >
          CONTACT
        </NavLink>
        {
          !currentUser
            ? (
              <NavLink
                to="/register"
                className="option"
                activeClassName="selected"
              >
                Sign In
              </NavLink>
            ) : (
              <Link
                className="option"
                to="/register"
                onClick={() => auth.signOut()}
              >Sign out
              </Link>
            )
        }

      </div>
    </div>
  );
};

export default Header;
