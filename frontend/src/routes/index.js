import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import SimplifiedLayout from '../layout';
import PrivateRoute from './Route';
import HomePage from '../pages/HomePage'; // Página simples dentro do layout

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<SimplifiedLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
