import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import PrivateRoute from './PrivateRoute'; 
import { AuthProvider } from '../context/Auth/AuthContext';
import SimplifiedLayout from '../layout';

export function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="*" element={<Navigate to="/login" />} />
                <Route element={<PrivateRoute />}>
                    {/* <Route path='/' element={<SimplifiedLayout />}>
                        <Route index element={<Home />} />
                    </Route> */}
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}
