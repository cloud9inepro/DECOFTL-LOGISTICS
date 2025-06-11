
// import { motion } from 'framer-motion';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0.98,
//     filter: 'blur(8px)',
//     y: 30,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     filter: 'blur(0px)',
//     y: 0,
//     transition: {
//       duration: 1.3,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   },
// };

const Home = () => {
  return (
    // <motion.main
    //   initial="initial"
    //   animate="animate"
    //   variants={pageVariants}
    // >
    <>
      <div className='main'>
        <h1>Track Your Package</h1>
        <p>Enter your tracking number below...</p>
        <form>
          <input type="text" placeholder="Tracking Number" />
          <button className='main-btn' type="submit">Track</button>
        </form>
        <h2 className='main-h2'>Available Services</h2>
        <div className='service'>
        <div className='service-card1'><p>Service 1</p></div>
        <div className='service-card1'><p>Service 2</p></div>
        <div className='service-card1'><p>Service 3</p></div>
      </div>
      </div>
      
    
    </>
    );
}


export default Home;
