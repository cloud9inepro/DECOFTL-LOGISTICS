import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Contact =() => {
  return (
    <>
      <main className='contact'>
  <h1>Contact Us</h1>
  <p>If you have any questions or need assistance, please reach out to us using the form below.</p>

  {/* 📞 Direct Contact Info */}
  <div className="contact-info">
    <p><strong>Call Us:</strong> <a href="tel:+2348012345678">+234 801 234 5678</a></p>
    <p><strong>Email:</strong> <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
  </div>

  <form className='contact-form'>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required /> 
    <textarea placeholder="Your Message" required></textarea> 
    <button className='main-btn' type="submit">Send Message</button>
  </form>
</main>

    </>
  );
}
export default Contact;