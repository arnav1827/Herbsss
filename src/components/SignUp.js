import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import axios from 'axios'; // Import Axios for making API calls
import './SignUp.css';

const SignUp = ({ onClose, onSignUpSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage(''); // Clear error message when toggling
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message

    try {
      let url = 'http://localhost:5000/api/auth/';
      url += isSignUp ? 'register' : 'login';

      const res = await axios.post(url, formData);

      if (res.data.token) {
        localStorage.setItem('token', res.data.token); // Save JWT token to localStorage
        onSignUpSuccess(formData.name); // Pass the name to parent component after successful signup
        onClose(); // Close the form after success
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="backdrop" onClick={onClose} />
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <button className="close-btn" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <div className="form-box">
          {isSignUp ? (
            <>
              <h2>Create Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="buttock" type="submit">Sign Up</button>
                <p className="switch-link" onClick={toggleForm}>Already have an account? Log In</p>
              </form>
            </>
          ) : (
            <>
              <h2>Log In</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="buttock" type="submit">Log In</button>
                <p className="switch-link" onClick={toggleForm}>Don't have an account? Sign Up</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
