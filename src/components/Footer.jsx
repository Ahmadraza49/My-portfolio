import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-10 border-t border-white/10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-5">

        <div>
         © 2026 Ahmad Raza

Full Stack MERN Developer
Available For Freelance Projects
        </div>

        <div className="flex gap-5 text-xl">

          <a href="https://github.com/Ahmadraza49">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/ahmad-raza-883176334">
            <FaLinkedin />
          </a>

          <a href="https://web.facebook.com/ahmad.chaudhry.328468/">
            <FaFacebook />
          </a>

        </div>

      </div>

    </footer>
  );
}