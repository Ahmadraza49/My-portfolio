
import food from './assets/food.png'
import goods from './assets/goods.png'
import blogify from './assets/blogify.png'
import mypic from './assets/mypic.jpeg'

export default function PortfolioLandingPage() {
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

          <div className="relative group">
            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

            <img
              src={mypic}
              alt="profile"
              className="relative w-72 h-72 rounded-full object-cover border-4 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition duration-500"
            />
          </div>

          <p className="mt-8 text-white/60">
            Let's Grow Your Business
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
              Transforming <span className="text-green-500">Businesses</span>
              <br />
              Through Modern
              <br />
              <span className="text-green-500">Websites</span> That Build
              <span className="text-green-500"> Trust</span>
              <br />
              & Drive Growth
            </h2>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/70">
            <span>MERN Stack Developer</span>
            <span>AWS</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="#work"
              className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 inline-block"
            >
              View My Work
            </a>

            <a
              href="https://wa.me/923157571254"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-3 rounded-full hover:border-green-500 hover:text-green-400 transition duration-300 inline-block"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">

            <a
              href="https://github.com/Ahmadraza49"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-5 py-2 rounded-full hover:border-green-500 hover:text-green-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ahmad-raza-883176334"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-5 py-2 rounded-full hover:border-green-500 hover:text-green-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
             href="/Ahmadraza--cv.pdf"
              download
              className="border border-white/20 px-5 py-2 rounded-full hover:border-green-500 hover:text-green-400 transition duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-10 max-w-lg">
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '8+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Focused' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-green-500 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-green-500">
                  {item.number}
                </h3>

                <p className="text-white/60 mt-2 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/10 py-6 overflow-hidden">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] text-3xl font-bold text-white/70 flex gap-16 px-10">
          <span>React ✦</span>
          <span>Node.js ✦</span>
          <span>MongoDB ✦</span>
          <span>AWS ✦</span>
          <span>TypeScript ✦</span>
          <span>Next.js ✦</span>
          <span>REST APIs ✦</span>
          <span>React ✦</span>
          <span>Node.js ✦</span>
          <span>MongoDB ✦</span>
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

          {[
            {
              title: 'Blogify App',
              image: blogify,
              link: 'https://blog-delta-three-63.vercel.app/',
              desc: 'Full-stack MERN blogging platform with authentication and CRUD operations.',
              tech: ['React', 'MongoDB', 'Node.js', 'Express.js'],
            },

            {
              title: 'Business App',
              image: goods,
              link: 'https://ch-goods.vercel.app/',
              desc: 'Modern transportation website focused on business growth.',
              tech: ['React', 'Tailwind'],
            },

            {
              title: 'Food App',
              image: food,
              link: 'https://food-delivery-app-eosin-seven.vercel.app/',
              desc: 'Modern food delivery frontend with responsive UI.',
              tech: ['React', 'javaScript', 'Tailwind CSS'],
            },

          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(34,197,94,0.3)] transition duration-500 block"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
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

                <div className="mt-5 inline-flex items-center gap-2 text-green-400 font-semibold">
                  View Live Project →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full"></div>

          <img
            src={mypic}
            alt="about"
            className="relative w-[350px] h-[450px] object-cover rounded-3xl border border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)] mx-auto"
          />
        </div>

        <div>

          <p className="text-green-500 uppercase tracking-[4px] text-sm mb-5">
            About Me
          </p>

          <h2 className="text-5xl font-black leading-tight mb-6">
            I build <span className="text-green-500">modern web applications</span> with clean design & powerful functionality.
          </h2>

          <p className="text-white/60 leading-relaxed text-lg">
            I'm Ahmad Raza, a passionate MERN Stack Developer focused on creating responsive, fast, and user-friendly web applications.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            {[
              {
                title: 'Engineering',
                desc: 'React, Node.js, TypeScript, REST APIs',
              },

              {
                title: 'Design',
                desc: 'Clean UI design, responsive layouts and smooth UX.',
              },

              {
                title: 'Product',
                desc: 'Focused on building impactful web products that solve real business problems.',
              },

            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-green-500">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4 text-center">
          Services
        </p>

        <h2 className="text-5xl font-black text-center mb-16">
          What I <span className="text-green-500">Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: 'Frontend Development',
              desc: 'Modern responsive interfaces using React and Tailwind CSS.',
            },

            {
              title: 'Backend Development',
              desc: 'Scalable APIs and server-side applications using Node.js.',
            },

            {
              title: 'Business Websites',
              desc: 'Professional websites focused on trust and business growth.',
            },

          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-500 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-green-500 mb-4">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="mt-16 text-center px-6">

        <p className="text-green-500 uppercase tracking-[4px] text-sm mb-4">
          Technologies
        </p>

        <h3 className="text-4xl font-black mb-10">
          My <span className="text-green-500">Tech Stack</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            'React',
            'Node.js',
            'MongoDB',
            'Express.js',
            'Tailwind CSS',
            'JavaScript',
            'Firebase',
            'GitHub',
            'AWS',
          ].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-500 hover:text-green-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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

         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadraza.dev02@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex items-center gap-3 bg-green-500 text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
>
  {/* Mail Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 7.743V7.5"
    />
  </svg>

  Let's Talk
</a>

<p className="mt-4 text-white/50 text-sm">
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
            className="hover:text-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ahmad-raza-883176334"
            target="_blank"
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

      {/* Animation */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
       
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}