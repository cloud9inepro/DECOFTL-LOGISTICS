import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      
      <main className='login'>
        <h1>Login</h1>
        <form className='login-form'>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className='main-btn' type="submit">Login</button>
        </form>
        <p className='register-link'>Don't have an account? <a href="/register">Register here</a> </p>
      </main>
    </>
  );
}

export default Login;