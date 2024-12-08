import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - CarRent</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">We are a reliable car rental service provider.</p>
      </main>
    </div>
  );
};

export default About;
