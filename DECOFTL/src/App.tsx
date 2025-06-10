import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(8px)',
    y: 30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack
    },
  },
};

function App() {
  return (
    <>
      <Header />
      <motion.main
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <div className='main'>
        <h1>Track Your Package</h1>
        <p>Enter your tracking number below...</p>
        <form>
          <input type="text" placeholder="Tracking Number" />
          <button type="submit">Track</button>
        </form>
        
        <h2>Available Services</h2>
        </div>
        <div className='service'>
          <div className='service-card1'><p>Service 1</p></div>
          <div className='service-card1'><p>Service 2</p></div>
          <div className='service-card1'><p>Service 3</p></div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}

export default App;
