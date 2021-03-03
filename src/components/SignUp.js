import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [inputValue, setInputValue] = useState(initialState);

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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    console.log(inputValue);
    const {
      displayName, email, password, confirmPassword,
    } = inputValue;

    if(password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }

    try {
      // Buat akun (auth)
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      // Tambahakan user ke database
      await createUserProfileDocument(user, { displayName }, true);

      // Kalau sudah sign up user harus langsung sign in
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }

    // Kosongkan form
    setInputValue(initialState);
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSignUpSubmit}>
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
          <Button
            title="sign up"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
