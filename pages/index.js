import Head from 'next/head';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'Section 1', href: '#', current: false, children: ['1.1. Subsection', '1.2. Subsection'] },
  { name: 'Section 2', href: '#', current: false, children: ['2.1. Subsection', '2.2. Subsection'] },
  { name: 'Section 3', href: '#', current: false, children: ['3.1. Subsection', '3.2. Subsection'] },
];

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Learn Web3 & Cryptocurrencies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex">
        <nav className="flex flex-col w-64 bg-gray-800 h-screen py-4 px-2">
          <div className="text-white font-bold text-2xl mx-auto my-4">Table of Contents</div>
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Disclosure key={item.name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex items-center justify-between bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring">
                      {item.name}
                      <ChevronDownIcon
                        className={classNames(open ? 'transform rotate-180' : '', 'h-5 w-5 text-white')}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-gray-900 pb-2 pt-0">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-5 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {child}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </nav>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-blue-300">Learn Web3 & Cryptocurrencies</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              In the rapidly evolving world of cryptocurrencies and blockchain technology, it's essential to stay
              up-to-date with the latest trends and developments. Our comprehensive course is designed to provide you
              with the knowledge and skills you need to navigate the complex world of Web3, digital assets, and
              decentralized finance with confidence. By taking this course, you'll not only gain a solid understanding
            of the fundamental concepts but also learn how to put them into practice, enabling you to make informed
            decisions and seize new opportunities in this exciting space.
          </p>
          <p className="mt-5 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
            Ready to get started? Enroll today and gain the skills and knowledge you need to succeed in the world of
            Web3 and cryptocurrencies.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/enroll">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Enroll now
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/about">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

