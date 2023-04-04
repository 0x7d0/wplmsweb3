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

      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
        <header className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-white">Learn Web3 & Cryptocurrencies</h1>
            <div className="-mr-2 -my-2 md:hidden">
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
        </header>

        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <nav className="bg-white shadow sm:hidden" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure key={item.name}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex items-center justify-between">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-gray-900',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                        <ChevronDownIcon
                          className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
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

          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {navigation.map((item) => (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex items-center justify-between">
                          <a
                            href={item.href}
                            className={classNames(
                              item.current ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                          <ChevronDownIcon
                            className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child}
                              href="#"
                              className="block px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                              {child}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </nav>
            </div>
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

//export default HomePage;
