import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <p className="footer-text">
        © {new Date().getFullYear()}{" "}
        <strong>Rahul Suryawanshi</strong>.
        <br />
        Built with ❤️ using React & Vite.
      </p>

     

    </footer>
  );
}

export default Footer;