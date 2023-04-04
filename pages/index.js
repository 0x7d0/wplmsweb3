import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Learn Web3 & Cryptocurrencies</title>
        <meta name="description" content="Unlock the Future of Decentralized Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-blue-500 w-64 space-y-4 p-4">
        <h1 className="text-2xl font-bold text-white">Course Sections</h1>
        <ul>
          <li>
            <button
              className="font-semibold text-white"
              onClick={() => toggleSection(1)}
            >
              1. Introduction
            </button>
            {activeSection === 1 && (
              <ul className="pl-4 space-y-1">
                <li>
                  <a href="#section1_1" className="text-white">1.1. What is Web3?</a>
                </li>
                {/* Add more sub-sections here */}
              </ul>
            )}
          </li>
          {/* Add more sections here */}
        </ul>
      </nav>

      <div className="flex flex-col w-full">
        <header className="bg-blue-500 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white">
              Learn Web3 & Cryptocurrencies
            </h1>
          </div>
        </header>

        <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Course!</h2>
          <p>
            This is a comprehensive course on Web3 and Cryptocurrencies.
            Throughout this course, you will learn about blockchain technology,
            smart contracts, decentralized applications, and much more.
          </p>
        </main>
      </div>
    </div>
  );
}
