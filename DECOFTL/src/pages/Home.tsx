import illustration from '../assets/illustration.svg';

const Home = () => {
  return (
    <section className="hero-section">
      {/* SVG Background */}
      <div className="hero-backdrop">
        <img src={illustration} alt="background animation" />
      </div>

      {/* Main Content */}
      <div className="main">
        <h1>Track Your Package</h1>
        <p>Enter your tracking number below...</p>
        <form>
          <input type="text" className="main-input" placeholder="Tracking Number" />
          <button className="main-btn" type="submit">Track</button>
        </form>

        <h2 className="main-h2">Available Services</h2>
        <div className="service">
          <div className="service-card1"><p>Service 1</p></div>
          <div className="service-card1"><p>Service 2</p></div>
          <div className="service-card1"><p>Service 3</p></div>
        </div>
      </div>

      <div className="service-carousel">
  <div className="carousel-track">
    <div className="service-card"><p>Service 1</p></div>
    <div className="service-card"><p>Service 2</p></div>
    <div className="service-card"><p>Service 3</p></div>
  </div>
</div>


    </section>
  );
};

export default Home;
