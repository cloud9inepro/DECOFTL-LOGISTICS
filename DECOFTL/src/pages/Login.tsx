import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
       <p className='login-link'>
  Don't have an account? <Link to="/Register">Register here</Link>
</p>
      </main>
    </>
  );
}

export default Login;