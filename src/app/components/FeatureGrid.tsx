import Card from './Card';

const FeatureGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
        <Card
          title="Wide Selection"
          description="Luxury, compact, and economy cars for your needs."
        />
        <Card
          title="Affordable Prices"
          description="Unbeatable prices with excellent service."
        />
        <Card
          title="24/7 Support"
          description="Get help anytime with our round-the-clock support."
        />
      </div>
    </section>
  );
};

export default FeatureGrid;
