import Head from 'next/head';
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
  return (
    <div>
      <Head>
        <title>Learn Web3 & Cryptocurrencies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
        <header className="py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-white">Learn Web3 & Cryptocurrencies</h1>
        </header>

        <div className="flex">
          <aside className="w-64 bg-white p-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Disclosure key={item.name}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex items-center justify-between">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-blue-700' : 'text-gray-700 hover:text-gray-900',
                            'block text-base font-medium'
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
                            className="block pl-6 text-base font-medium text-gray-500 hover:text-gray-900"
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
          </aside>

          <main className="flex-1 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
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
  </div>
);
}

export default HomePage;
