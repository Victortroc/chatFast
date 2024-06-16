import React, { createContext } from "react";
import useAuth from "../../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { token, user, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider value={{ token, user, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
