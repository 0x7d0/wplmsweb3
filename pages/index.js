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
          <p className="text-lg mb-4">
            The world is witnessing a paradigm shift in technology and finance.
            As we enter the era of decentralization, it's crucial to understand
            the concepts and technologies that are shaping our future. This
            comprehensive course on Web3 and Cryptocurrencies is designed to
            provide you with the knowledge and skills needed to navigate and
            thrive in this exciting new landscape.
          </p>
          <p className="text-lg mb-4">
            Our course covers a wide range of topics, from the fundamentals of
            blockchain technology to the intricacies of smart contracts and
            decentralized applications. By completing this course, you'll gain a
            solid understanding of the core concepts and practical applications
            of Web3 and Cryptocurrencies.
          </p>
          <p className="text-lg mb-4">
            Throughout your learning journey, you'll also have the opportunity
            to interact with a vibrant community of like-minded individuals
            passionate about decentralized technology. By engaging with your
            peers, you'll gain valuable insights and perspectives while building
            lasting connections that can help you succeed in the rapidly
            evolving world of Web3.
          </p>
          <p className="text-lg mb-4">
            We firmly believe that education is the key to unlocking the
            potential of decentralized technology. By equipping yourself with the
            knowledge and skills offered in this course, you'll be better
            prepared to embrace the opportunities and challenges that come with the Web3 revolution. As a course participant, you'll be empowered to contribute to the decentralized ecosystem, innovate with new technologies, and ultimately shape the future of the digital world.
          </p>
          <p className="text-lg mb-4">
            We invite you to join us on this exciting journey as we explore the world of Web3 and cryptocurrencies together. Whether you're a beginner looking to get started or an experienced professional seeking to deepen your understanding, this course offers a comprehensive and engaging learning experience tailored to your needs.
          </p>
          <p className="text-lg mb-4">
          Don't miss out on this opportunity to become a part of the decentralized revolution. Embark on your learning journey with us today and unlock the future of technology and finance!
          </p>
    </main>
  </div>
</div>
  );
}