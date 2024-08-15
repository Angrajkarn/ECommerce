import React, { createContext, useContext, useState } from 'react';

// Create context for authentication
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state: no user logged in

  // Example login function
  const login = (username, password) => {
    // Example logic to authenticate user (replace with your own authentication logic)
    // For demo purposes, we are just setting the user with username
    setUser({ username });
  };

  // Example logout function
  const logout = () => {
    // Example logic to log out user
    setUser(null);
  };

  // Context value containing user state, login and logout functions
  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
