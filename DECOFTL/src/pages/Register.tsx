import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <>
        <main className='register'>
            <h1>Register</h1>
            <form className='register-form'>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className='main-btn' type="submit">Register</button>
            </form>
            <p className='login-link'>Already have an account? <a href="/login">Login here</a></p>
        </main>
    </>
  );
}

export default Register;