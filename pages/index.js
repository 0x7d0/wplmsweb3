import Head from "next/head";

const Home = ({ courses }) => {
  return (
    <>
      <Head>
        <title>My Course Platform</title>
        <meta name="description" content="A headless course platform built with Next.js and WordPress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Featured Courses</h1>
        <section>
          {courses.map((course) => (
            <div key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Replace this with your actual WordPress API call
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "This is an example course",
    },
    {
      id: 2,
      title: "Course 2",
      description: "This is another example course",
    },
  ];

  return {
    props: {
      courses,
    },
  };
}

export default Home;
