import React from 'react'
import "./login.css"




const Login = () => {

  const loginwithgoogle = () => {
    window.open("http://localhost:6007/auth/google/callback", "_self")
  }

  return (
    <div className="login-container">
      <h1 className='bluespace-login'>BLUE SPACE</h1>
      <div className='card-container'>
        <h1 style={{ textAlign: "center" }} className='heading-login'>Login</h1>
        <p className='description-login'>Please enter your Login and your Password</p>
        <form >
          <div className='input-with-icon-login'>
            <img
              src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1721109494/icons8-customer-64_1_bwavka.png"
              alt="username icon"
              className='username-icon'
            />
            <input
              type="email"
              placeholder='Email'
              className='username-input'

              required
            />
          </div>
          <div className='input-with-icon-login'>
            <img
              src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1721122695/icons8-password-32_1_a3aj7t.png"
              alt="password icon"
              className='username-icon'
            />
            <input
              type="password"
              placeholder='Password'
              className='username-input'

              required
            />
          </div>
          <button type="submit" className='login-button'>Register</button>

        </form>
        <div className='divider'>
          <p>OR</p>
        </div>
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