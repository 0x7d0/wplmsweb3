import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Course</title>
        <meta name="description" content="Learn Web3 and Cryptocurrencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-blue-600 to-blue-500 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-2xl">Our Course</div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white">Courses</a>
                </li>
                <li>
                  <a href="#" className="text-white">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Course!</h1>
        <p className="text-lg">
          Learn about Web3, cryptocurrencies, and more in our comprehensive course. As you progress through the course, you'll unlock new features and build your own NFT character!
        </p>
      </main>
    </div>
  );
}
