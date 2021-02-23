import React from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';

const SignIn = () => {
  return (
    <div className="sign-in">
      <form>
        <FormHeader
          title="I already have an account"
          description="Sign in with your email and password"
        />
        <div className="form-body">
          <FormInput
            label="signInEmail"
            type="email"
            title="email"
          />
          <FormInput
            label="signInPassword"
            type="password"
            title="password"
          />
        </div>
        <div className="btn-container">
          <Button title="sign in" />
          <Button
            title="sign in with google"
            blue
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
