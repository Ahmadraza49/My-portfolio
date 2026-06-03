import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-10 border-t border-white/10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-5">

        <div>
         © 2025 Ahmad Raza

Full Stack MERN Developer
Available For Freelance Projects
        </div>

        <div className="flex gap-5 text-xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaFacebook />
          </a>

        </div>

      </div>

    </footer>
  );
}