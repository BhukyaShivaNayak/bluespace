import React from 'react';
import './index.css'; // Optional: If you have a specific CSS file for this component

const Unauthorized = () => {
    return (
        <div className="unauthorized-container">
            <h1>Unauthorized</h1>
            <p>You do not have permission to view this page.</p>
        </div>
    );
};

export default Unauthorized;
