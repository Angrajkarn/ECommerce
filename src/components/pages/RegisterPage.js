import React from 'react';
import { useAuth } from '../hooks/useAuth';

const RegisterPage = () => {
  // Example: Registration function
  const { login } = useAuth(); // Assuming registration automatically logs in

  const handleRegister = () => {
    // Logic to register user
    login('newUsername', 'newPassword'); // Replace with actual registration logic
  };

  return (
    <div>
      <h2>Register Page</h2>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
