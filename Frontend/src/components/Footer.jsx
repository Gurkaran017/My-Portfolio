import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-zinc-500 border-l-transparent border-r-transparent text-zinc-300 mt-8">
      <div className="w-full p-12 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        
        <div className="flex flex-row justify-between w-40">
          <a
            href="https://www.linkedin.com/in/gurkaran-singh-b0241b2a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 flip-animation cursor-pointer" />
          </a>

          <a
            href="https://github.com/Gurkaran017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-7 h-7 flip-animation cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/gurkaran07_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 flip-animation cursor-pointer" />
          </a>
        </div>

        <div className="text-zinc-500 mt-14 sm:m-0 text-center sm:text-end">
          <p className="mb-4 sm:mb-0">Powered by Vite, Tailwind and EmailJS 🚀</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
