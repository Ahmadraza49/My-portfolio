import food from './assets/food.png'
import goods from './assets/goods.png'
import blogify from './assets/blogify.png'
import mypics from './assets/mypics.png'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaLinkedin,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
} from 'react-icons/si'

export default function PortfolioLandingPage() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vn68tbq',
        'template_7h2s4h1',
        form.current,
        'CfK4g_CABeHOuxk02'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
        },
        (error) => {
          alert('Failed To Send Message')
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  const projects = [
    {
      title: 'Blogify App',
      image: blogify,
      link: 'https://blog-delta-three-63.vercel.app/',
      github: 'https://github.com/Ahmadraza49',
      desc: 'Full-stack MERN blogging platform with authentication and CRUD operations.',
      tech: ['React', 'MongoDB', 'Node.js', 'Express.js'],
    },

    {
      title: 'Business App',
      image: goods,
      link: 'https://ch-goods.vercel.app/',
      github: 'https://github.com/Ahmadraza49',
      desc: 'Modern transportation website focused on business growth.',
      tech: ['React', 'Tailwind'],
    },

    {
      title: 'Food App',
      image: food,
      link: 'https://food-delivery-app-eosin-seven.vercel.app/',
      github: 'https://github.com/Ahmadraza49',
      desc: 'Modern food delivery frontend with responsive UI.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
    },
  ]

  const techStack = [
    {
      name: 'React',
      icon: <FaReact />,
    },

    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },

    {
      name: 'MongoDB',
      icon: <SiMongodb />,
    },

    {
      name: 'Express.js',
      icon: <SiExpress />,
    },

    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },

    {
      name: 'JavaScript',
      icon: <SiJavascript />,
    },

    {
      name: 'Firebase',
      icon: <SiFirebase />,
    },

    {
      name: 'GitHub',
      icon: <FaGithub />,
    },

    {
      name: 'AWS',
      icon: <FaAws />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-[700px] right-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
              AR
            </div>

            <h1 className="text-lg font-semibold">
              Ahmad Raza
            </h1>

          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">

            <a href="#work" className="hover:text-green-400 transition">
              Work
            </a>

            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-green-400 transition">
              Skills
            </a>

            <a href="#services" className="hover:text-green-400 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>

          </nav>

          <a
            href="https://wa.me/923157571254"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,197,94,0.6)]"
          >
            Hire Me
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative group"
>

  {/* Glow */}
  <div className="absolute inset-0 bg-green-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

  {/* Hire Badge */}
 <div className="absolute bottom-3 right-0 z-20 bg-green-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.8)] animate-pulse">
  Open to Work
</div>

  {/* Image */}
  <img
    src={mypics}
    alt="profile"
    className="relative w-72 h-72 rounded-full object-cover border-4 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition duration-500"
  />

</motion.div>
          <p className="mt-8 text-white/60">
            Let’s Build Something Amazing Together
          </p>

          <a
            href="https://wa.me/923157571254"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 bg-green-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,197,94,0.5)] inline-block"
          >
            Book a Free Consultation
          </a>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">

            {[
              'Responsive Design',
              'Clean Code',
              'Fast Performance',
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:border-green-500 hover:text-green-400 transition duration-300"
              >
                {item}
              </span>
            ))}

          </div>
        </div>

        {/* Right */}
        <div>

          <p className="text-2xl italic text-white/80 mb-5">
            Helping You
          </p>

          <div className="border border-green-500 rounded-3xl p-8 bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(34,197,94,0.2)] hover:shadow-[0_0_80px_rgba(34,197,94,0.4)] transition duration-500">

            <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">

              Building Fast &
              <br />

              <span className="text-green-500">
                Scalable Web
              </span>

              <br />

              Applications With
              <br />

              Clean UI &
              <span className="text-green-500">
                Powerful Backend
              </span>

            </h2>

            <p className="text-white/60 mt-6 text-lg leading-relaxed max-w-xl">

              MERN Stack Developer specializing in responsive frontend,
              scalable backend systems, REST APIs, and modern web experiences.

            </p>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-28">

        <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4">
          Selected Work
        </p>

        <h2 className="text-5xl font-black mb-16">
          Recent <span className="text-green-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(34,197,94,0.3)] transition duration-500 flex flex-col h-full"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6 flex-1 flex flex-col">

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="mt-auto pt-6 flex gap-4">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 font-semibold"
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-green-400 transition"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-16 text-center px-6 pb-24">

        <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4">
          Technologies
        </p>

        <h3 className="text-4xl font-black mb-10">
          My <span className="text-green-500">Tech Stack</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-5">

          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-500 hover:text-green-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition duration-300 flex items-center gap-3"
            >

              <span className="text-xl">
                {tech.icon}
              </span>

              <span>
                {tech.name}
              </span>

            </div>
          ))}

        </div>
      </section>
      {/* MERN Expertise */}
<section id="services" className="max-w-7xl mx-auto px-6 py-28 text-center">

  <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4">
    What I Do
  </p>

  <h2 className="text-5xl font-black mb-12">
    MERN Stack <span className="text-green-500">Expertise</span>
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

    {/* Frontend */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        Frontend Development
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Building responsive, fast and modern UI using React.js, Tailwind CSS and Framer Motion.
        Focus on clean design, reusable components and smooth user experience.
      </p>
    </div>

    {/* Backend */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        Backend Development
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Creating secure and scalable REST APIs using Node.js, Express.js with authentication,
        middleware and proper MVC architecture.
      </p>
    </div>

    {/* Database */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        Database Management
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Working with MongoDB and Mongoose for schema design, data modeling,
        aggregation and optimized database queries.
      </p>
    </div>

    {/* Full Stack */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        Full Stack Applications
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        End-to-end MERN applications with authentication, CRUD systems,
        dashboards, APIs integration and deployment on Vercel/Netlify.
      </p>
    </div>

    {/* API Integration */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        API Integration
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Integrating third-party APIs, handling requests, error handling and building
        scalable data-driven applications.
      </p>
    </div>

    {/* Deployment */}
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500 transition">
      <h3 className="text-xl font-bold text-green-400 mb-3">
        Deployment & Hosting
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        Deploying projects on Vercel, Netlify, and AWS with environment variables,
        performance optimization and CI/CD basics.
      </p>
    </div>

  </div>
</section>
     
     {/* Testimonials */}
<section className="max-w-7xl mx-auto px-6 py-28 text-center">

  <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4">
    Testimonials
  </p>

  <h2 className="text-5xl font-black mb-14">
    What Clients <span className="text-green-500">Say</span>
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Testimonial 1 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-green-500 hover:-translate-y-2 transition duration-300">

      <div className="flex justify-center mb-4 text-green-400 text-2xl">
        ★★★★★
      </div>

      <p className="text-white/60 leading-relaxed text-sm">
        Ahmad delivered an amazing modern website with clean UI and smooth performance.
        Communication was excellent throughout the project.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg">
          Ali Khan
        </h4>

        <p className="text-white/40 text-sm">
          Business Owner
        </p>
      </div>

    </div>

    {/* Testimonial 2 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-green-500 hover:-translate-y-2 transition duration-300">

      <div className="flex justify-center mb-4 text-green-400 text-2xl">
        ★★★★★
      </div>

      <p className="text-white/60 leading-relaxed text-sm">
        Professional MERN stack developer with strong frontend and backend skills.
        The project was completed before deadline.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg">
          Hamza Ahmed
        </h4>

        <p className="text-white/40 text-sm">
          Startup Founder
        </p>
      </div>

    </div>

    {/* Testimonial 3 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-green-500 hover:-translate-y-2 transition duration-300">

      <div className="flex justify-center mb-4 text-green-400 text-2xl">
        ★★★★★
      </div>

      <p className="text-white/60 leading-relaxed text-sm">
        Highly recommended for responsive web applications and API integration.
        Clean code structure and great attention to detail.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg">
          Umar Farooq
        </h4>

        <p className="text-white/40 text-sm">
          Software Client
        </p>
      </div>

    </div>

  </div>

</section>


      {/* Contact */}
      <section id="contact" className="relative py-32 text-center px-6">

        <div className="absolute inset-0 bg-green-500/10 blur-[120px]"></div>

        <div className="relative max-w-3xl mx-auto">

          <p className="italic text-2xl text-white/70 mb-6">
            Let's collaborate
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">

            Build something
            <br />

            <span className="text-green-500">
              extraordinary.
            </span>

          </h2>

          <p className="text-white/60 mt-8 text-lg">
            Available for freelance projects and full-time roles.
          </p>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-10 space-y-5 max-w-xl mx-auto"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500"
            />

            <button
              type="submit"
              className="bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

          <p className="mt-6 text-white/50 text-sm">
            ahmadraza.dev02@gmail.com
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center">

        <div className="flex justify-center gap-6 text-sm text-white/50 mb-4 flex-wrap">

          <a
            href="https://github.com/Ahmadraza49"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ahmad-raza-883176334"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ahmadraza.dev02@gmail.com"
            className="hover:text-green-400 transition"
          >
            Email
          </a>

        </div>

        <p className="text-white/40 text-sm">
          © 2025 Ahmad Raza — MERN Stack Developer
        </p>

        <p className="text-white/30 text-xs mt-2">
          Designed & Developed by Ahmad Raza
        </p>

      </footer>

      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </div>
  )
}