import Head from 'next/head';

const Services = () => {
  return (
    <div>
      <Head>
        <title>Services - CarRent</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-4">Explore our wide range of car rental services.</p>
      </main>
    </div>
  );
};

export default Services;
