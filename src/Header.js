import React from 'react';
import './App.css';
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from '@auth0/auth0-react';

const SignUpDialog = ({ onClose, onRegisterAsCustomer, onRegisterAsSeller }) => {
  const { loginWithRedirect } = useAuth0();

  const handleRegisterAsCustomer = () => {
    loginWithRedirect({
      appState: { role: 'customer' }, // Trigger Auth0 flow for customer role
    });
  };

  return (
    <div className="dialog-wrapper">
      <div className="dialog">
        <div className="dialog-header">
          <h2>Register</h2>
          <button className="close-button" onClick={onClose}>
            <h3 className='icon'><IoMdClose /></h3>
          </button>
        </div>
        <div className="dialog-body">
          <button onClick={handleRegisterAsCustomer}>Register as Customer</button>
          <button onClick={onRegisterAsSeller}>Register as Seller</button>
          <button onClick={onRegisterAsSeller}>Register as Govt. official</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpDialog;
