import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
    
        return <Navigate to="/login" replace />;
    }


    if (user && user.email.endsWith('@thebluespire.com')) {
        return element;
    } else {
        
        return <Navigate to="/unauthorized" replace />;
    }
};

export default ProtectedRoute;
