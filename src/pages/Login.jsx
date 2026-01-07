import React from "react";
import "../Css/Login.css";
function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button>Continue</button>

        <p className="login-link">
          Already have an account ? <span>Login here</span>
        </p>

        <div className="terms">
         <span> <input type="checkbox" /></span>
          <p>
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;
