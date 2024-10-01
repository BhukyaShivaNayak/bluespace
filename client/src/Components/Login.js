import React from 'react'
import "./login.css"




const Login = () => {

  const loginwithgoogle = () => {
    window.open("http://localhost:6007/auth/google/callback", "_self")
  }

  return (
    <div className="login-container">
      <div className='company-section'><img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1727765105/ehousjy5rgscy4hwpgv8_owihog-removebg-preview_qksowm.png" alt="company logo" className='company-logo' />  <h1 className='bluespace-login'>BlueSpire</h1>
      </div>
      <div className='card-container'>



        <button className='login-with-google-btn' onClick={loginwithgoogle}>
          <img
            src="https://res.cloudinary.com/dxqyvfqn2/image/upload/v1723025810/google_img-removebg-preview_hosr7r.png"
            className='google-logo'
            alt="google icon"
          />      Sign In With Google
        </button>



      </div>
    </div>
  );
};

export default Login;