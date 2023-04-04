import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Learn Web3 & Cryptocurrencies</title>
        <meta name="description" content="Unlock the Future of Decentralized Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Learn Web3 & Cryptocurrencies</h1>
            <button onClick={toggleNav} className="text-xl font-bold">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {showNav && (
            <nav className="bg-gray-200 p-4 w-64 space-y-4">
              <h2 className="text-xl font-bold">Course Sections</h2>
              <ul>
                <li>
                  <a href="#section1">1. Introduction</a>
                </li>
                <li>
                  <a href="#section2">2. Blockchain Basics</a>
                </li>
                <li>
                  <a href="#section3">3. Smart Contracts</a>
                </li>
                {/* Add more sections here */}
              </ul>
            </nav>
          )}

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Course!</h2>
            <p>
              This is a comprehensive course on Web3 and Cryptocurrencies. Throughout this course, you will learn about
              blockchain technology, smart contracts, decentralized applications, and much more.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
