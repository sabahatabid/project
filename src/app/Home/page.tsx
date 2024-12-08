import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - CarRent</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to CarRent</h1>
        <p className="mt-4">Your one-stop shop for car rentals.</p>
      </main>
    </div>
  );
};

export default Home;
