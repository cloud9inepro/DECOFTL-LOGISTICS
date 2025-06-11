import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

[data, setData] = useState({
  
})
  return (
    <>
      <Header />
      <main>
        <h1>Track Your Package</h1>
        <p>Enter your tracking number below to get the latest updates on your package.</p>
        <form>
          <input type="text" placeholder="Tracking Number" />
          <button type="submit">Track</button>
        </form>



        <h2>Available Services</h2>
    <div className='service'>
      <div className='service-card1'>
        <p>Service 1</p>
      </div>
      <div className='service-card1'>
        <p>Service 1</p>
      </div>
      <div className='service-card1'>
        <p>Service 1</p>
      </div>
    </div>
      </main>

    <Footer />
    </>
  )
}

export default App
