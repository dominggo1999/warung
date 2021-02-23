import React from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';

const SignUp = () => {
  return (
    <div className="sign-out">
      <form>
        <FormHeader
          title="I do not have an account"
          description="Sign in with your email and password"
        />
        <div className="form-body">
          <FormInput
            label="displayName"
            type="text"
            title="display name"
          />
          <FormInput
            label="signUpEmail"
            type="email"
            title="email"
          />
          <FormInput
            label="signUpPassword"
            type="password"
            title="password"
          />
          <FormInput
            label="confirmSignUpPassword"
            type="password"
            title="confirm password"
          />
        </div>

        <div className="btn-container">
          <Button title="sign up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
