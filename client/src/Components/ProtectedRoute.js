import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        // If user is not authenticated, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // If user is authenticated, check for authorized email
    if (user && user.email.endsWith('@thebluespire.com')) {
        return element;
    } else {
        // If the user's email is not authorized, redirect to unauthorized page
        return <Navigate to="/unauthorized" replace />;
    }
};

export default ProtectedRoute;
