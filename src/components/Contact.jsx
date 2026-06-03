import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vn68tbq",
        "template_7h2s4h1",
        form.current,
        "CfK4g_CABeHOuxk02"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="px-8 lg:px-16 py-20">

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="bg-[#08243a] border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Let's Work Together
          </h3>

          <p className="text-white/70 leading-7">
            Have a project idea or need a MERN developer?
            Feel free to reach out and let's build something amazing.
          </p>

          <div className="space-y-4 mt-8">

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:ahmadraza.dev02@gmail.com">
                ahmadraza.dev02@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub />
              <a href="https://github.com/Ahmadraza49" target="_blank">
                Github
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/ahmad-raza-883176334"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#08243a] border border-white/10 rounded-3xl p-8">

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 outline-none"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 outline-none"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 outline-none"
              required
            />

            <button
              type="submit"
              className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}