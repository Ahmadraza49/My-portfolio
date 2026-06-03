import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
min-h-screen
flex
items-center
px-8
lg:px-16
pt-24
lg:pt-0
"
    >
      <div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 font-medium"
        >
          Let's build something amazing 🚀
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mt-4 leading-tight"
        >
          Discover My
          <br />
          Web Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-white/60 mt-6 text-lg"
        >
          Full Stack MERN Developer specializing in React,
          Node.js, Express and MongoDB. Building modern,
          responsive and scalable web applications.
        </motion.p>

        <div className="flex gap-4 mt-8">

          <a
            href="#projects"
            className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white/20 px-8 py-3 rounded-full"
          >
            Hire Me
          </a>

        </div>

      </div>
    </section>
  );
}