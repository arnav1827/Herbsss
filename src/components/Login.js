import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked");
    // Your login logic here
  
    // Redirect to the dashboard after login
    navigate('/dashboard');
  };
  

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
