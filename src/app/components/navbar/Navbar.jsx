import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">damialade</div>
      <div className="navbar-icons">
        <Link
          href="https://www.instagram.com/ti_annah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://github.com/damialade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://www.linkedin.com/in/damilola-aladeokin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
