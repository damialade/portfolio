import { FiGithub } from "react-icons/fi";
import "./Navbar.css";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { TbFileCv } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">DamiAlade</div>
      <div className="navbar-icons">
        <Link
          href="mailto:tiannah1989@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiEmail />
        </Link>

        <Link
          href="https://github.com/damialade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </Link>

        <Link
          href="https://www.linkedin.com/in/damilola-aladeokin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1rP3K6RHrksb3wa7Fs3QsoKCGlIuMgYBM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbFileCv />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
