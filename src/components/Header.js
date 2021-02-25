import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
          currentUser
            ? (
              <Link
                className="option"
                to="/"
                onClick={() => auth.signOut()}
              >Sign out
              </Link>
            ) : (
              <NavLink
                to="/register"
                className="option"
                activeClassName="selected"
              >
                Sign In
              </NavLink>
            )
        }

      </div>
    </div>
  );
};

// Syntax
// value : state.namaReducer.valueyangdipakai
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// Connect is an HOC
export default connect(mapStateToProps)(Header);
