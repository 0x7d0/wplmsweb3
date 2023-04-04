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
        <div className="w-60 p-6 bg-white shadow-xl">
          <h2 className="text-lg font-medium text-gray-900 mb-3">Table of Contents</h2>
          <nav>
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'w-5 h-5 text-gray-500')}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <ul>
                            {item.children.map((child) => (
                              <li key={child}>
                                <a href="#" className="block hover:text-gray-800">{child}</a>
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
          <div className="sm:hidden">
            <div className="pt-2 pb-3">
              <button
                type="button"
                className="bg-blue-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="hidden sm:block">
            <nav className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

