import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import mypic from "../assets/mypic.jpeg";

export default function Sidebar() {
  return (
    <aside
      className="
        w-full
        pt-20
        lg:pt-0
        lg:w-80
        lg:fixed
        lg:left-6
        lg:top-1/2
        lg:-translate-y-1/2
        z-50
        px-4
        lg:px-0
      "
    >
      <div className="bg-[#071d2b] border border-white/10 rounded-3xl p-8 max-w-sm mx-auto">
        
        <img
          src={mypic}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 object-cover"
        />

        <h2 className="text-center text-2xl font-bold mt-5">
          Ahmad Raza
        </h2>

        <p className="text-center text-green-400">
          MERN Stack Developer
        </p>

        <div className="flex justify-center gap-4 mt-5 text-lg">
          <a href="https://github.com/Ahmadraza49"><FaGithub /></a>
          <a href="https://linkedin.com/in/ahmad-raza-883176334"><FaLinkedin /></a>
          <a href="https://web.facebook.com/ahmad.chaudhry.328468/"><FaFacebook /></a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-white/60">Country</span>
            <span>Pakistan</span>
          </div>

          <div className="flex justify-between">
            <span className="text-white/60">City</span>
            <span>Islamabad</span>
          </div>

          <div className="flex justify-between">
            <span className="text-white/60">Experience</span>
            <span>2+ Year</span>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <a
          href="https://wa.me/923157571254"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-8 bg-green-500 hover:bg-green-600 text-black py-3 rounded-full font-semibold text-center transition"
        >
          Contact Me
        </a>

      </div>
    </aside>
  );
}