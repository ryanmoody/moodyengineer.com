import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <nav className="mb-6 flex justify-center">
        <a
          aria-label="GitHub"
          className="mx-2"
          href="https://github.com/ryanmoody"
        >
          <FaGithub size={30} />
        </a>
        <a
          aria-label="LinkedIn"
          className="mx-2"
          href="https://linkedin.com/in/ryanmoodyengineer"
        >
          <FaLinkedin size={30} />
        </a>
      </nav>
      <p className="text-center">
        Copyright &copy; 2023 Ryan Moody, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
