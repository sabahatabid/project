const Hero = () => {
    return (
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="px-4">
          <h1 className="text-5xl font-bold mb-6">Rent Your Dream Car Today</h1>
          <p className="text-lg mb-6">
            Choose from a wide selection of vehicles at unbeatable prices.
          </p>
          <button className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  