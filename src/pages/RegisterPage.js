import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegisterPage;
