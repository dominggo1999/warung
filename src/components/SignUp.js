import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const newValue = e.target.value;

    switch (e.target.id) {
      case 'displayName':
        setInputValue({
          ...inputValue,
          displayName: newValue,
        });
        break;
      case 'signUpEmail':
        setInputValue({
          ...inputValue,
          email: newValue,
        });
        break;
      case 'signUpPassword':
        setInputValue({
          ...inputValue,
          password: newValue,
        });
        break;
      case 'confirmSignUpPassword':
        setInputValue({
          ...inputValue,
          confirmPassword: newValue,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-up">
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
            handleChange={handleChange}
            value={inputValue.displayName}
          />
          <FormInput
            label="signUpEmail"
            type="email"
            title="email"
            handleChange={handleChange}
            value={inputValue.email}
          />
          <FormInput
            label="signUpPassword"
            type="password"
            title="password"
            handleChange={handleChange}
            value={inputValue.password}
          />
          <FormInput
            label="confirmSignUpPassword"
            type="password"
            title="confirm password"
            handleChange={handleChange}
            value={inputValue.confirmPassword}
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
