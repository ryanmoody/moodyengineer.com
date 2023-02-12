import Header from './components/Header';
import Footer from './components/Footer';
import art from './assets/art.png';

const App = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col bg-white p-4">
      <Header />
      <main className="container mx-auto flex-1">
        <div className="my-48">
          <img alt="Spiral Art" className="mx-auto h-96 w-96" src={art} />
        </div>
        <div className="mb-32">
          <h2 className="mb-10 text-3xl font-bold">
            <span className="mr-2 text-sm font-thin">01.</span>About Me
          </h2>
          <p className="text-2xl">
            I'm a frontend software engineer specializing in building beautiful,
            performant and accessible user interfaces.
          </p>
        </div>
        <div className="mb-32">
          <h2 className="mb-10 text-3xl font-bold">
            <span className="mr-2 text-sm font-thin">02.</span>Experience
          </h2>
          <section>
            <h3 className="text-2xl font-bold">Senior Software Engineer</h3>
            <p className="text-xl">Guild Education</p>
            <p className="mt-2 text-sm">Nov 2021 - Feb 2023</p>
            <ul className="text-md mt-4 list-inside list-disc pl-6">
              <li className="mt-2">
                Coded single-page applications with TypeScript, React and Apollo
                Client
              </li>
              <li className="mt-2">
                Published shared packages with Storybook, Rollup and Sass
              </li>
              <li className="mt-2">
                Architected micro-frontends utilizing module federation with
                Webpack
              </li>
              <li className="mt-2">
                Scripted CI/CD workflows with NodeJS, GitHub Actions and Amazon
                Web Services
              </li>
              <li className="mt-2">
                Wrote unit, integration and end-to-end tests with Jest, Testing
                Library and Cypress
              </li>
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text-2xl font-bold">Software Engineer</h3>
            <p className="text-xl">United States Automobile Association</p>
            <p className="mt-2 text-sm">Sep 2016 - Nov 2021</p>
            <ul className="text-md mt-4 list-inside list-disc pl-6">
              <li className="mt-2">
                Coded single-page applications with JavaScript, React and Redux
              </li>
              <li className="mt-2">
                Developed REST APIs with Java, Spring Boot and Swagger
              </li>
              <li className="mt-2">
                Wrote unit, integration and end-to-end tests with Jest, Testing
                Library and Cypress
              </li>
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text-2xl font-bold">VetFIT&reg; Intern</h3>
            <p className="text-xl">United States Automobile Association</p>
            <p className="mt-2 text-sm">Jun 2016 - Sep 2016</p>
            <ul className="text-md mt-4 list-inside list-disc pl-6">
              <li className="mt-2">
                Completed a coding boot camp for military veterans transitioning
                into a career in software engineering
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
