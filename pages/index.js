import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>My Course</title>
        <meta name="description" content="Learn Web3 & Cryptocurrencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Learn Web3 & Cryptocurrencies</h1>
          <p className="text-xl text-white">Unlock the Future of Decentralized Technology</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4">Course Outline</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">1. Introduction to Web3 and Cryptocurrencies</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">2. Blockchain Fundamentals</a>
          </li>
          {/* Add more list items here */}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
