import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - CarRent</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">Reach out to us for any queries or support.</p>
      </main>
    </div>
  );
};

export default Contact;
