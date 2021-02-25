import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';
import { auth } from '../firebase/firebase.utils';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleChange = (e) => {
    if(e.target.id === 'signInEmail') {
      setInputValue({
        ...inputValue,
        email: e.target.value,
      });
    } else {
      setInputValue({
        ...inputValue,
        password: e.target.value,
      });
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = inputValue;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    setInputValue(initialState);
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSignInSubmit}>
        <FormHeader
          title="I already have an account"
          description="Sign in with your email and password"
        />
        <div className="form-body">
          <FormInput
            label="signInEmail"
            type="email"
            title="email"
            value={inputValue.email}
            handleChange={handleChange}
          />
          <FormInput
            label="signInPassword"
            type="password"
            title="password"
            value={inputValue.password}
            handleChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <Button title="sign in" />
          <Button
            type="submit"
            title="sign in with google"
            blue
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
