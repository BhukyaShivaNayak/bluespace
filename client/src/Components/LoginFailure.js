import React from 'react';
import "./LoginFailure.css"
import { useNavigate } from 'react-router-dom';

function LoginFailure() {
    const navigate = useNavigate();

    const handleOkClick = () => {
        navigate('/login');
    };

    return (
        < div className='login-fail'>
            <div className='fail-card'>
                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1727782515/401_Error_Unauthorized-rafiki-removebg-preview_ylin0u.png" alt="Unauthorized" className='unauthorized-image' />
                <h1 className='failed-statement'>Login Failed: Please use a valid BlueSpire Work Email.</h1>
                <button className='unauthorized-btn' onClick={handleOkClick}>Ok</button>
            </div>
        </div>
    );
}

export default LoginFailure;
