import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/Auth/AuthContext';

const PrivateRoute = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Ou algum outro componente de loading
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
