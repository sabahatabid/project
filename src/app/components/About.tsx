import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const About = () => {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-gray-600 leading-relaxed">
            Car Rent is a leading car rental service offering a wide range of vehicles at affordable prices. 
            Our mission is to provide excellent service and ensure customer satisfaction.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
