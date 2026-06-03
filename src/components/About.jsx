import { motion } from "framer-motion";
export default function About() {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Tailwind CSS", level: 95 },
  ];

  return (
    <section
      id="about"
      className="px-8 lg:px-16 py-20"
    >
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">
          My Story
        </h2>

        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}

        <div className="bg-[#08243a] border border-white/10 rounded-3xl p-8">

          <h3 className="text-3xl font-bold mb-6">
            Good Afternoon!
          </h3>

          <p className="text-white/70 leading-8">
            I am Ahmad Raza, a Full Stack MERN Developer
            focused on building modern, scalable and responsive
            web applications.
          </p>

          <p className="text-white/70 leading-8 mt-5">
            I enjoy solving real-world problems through clean
            architecture, optimized backend systems and
            engaging user experiences.
          </p>

          <p className="text-white/70 leading-8 mt-5">
            My expertise includes React.js, Node.js,
            Express.js, MongoDB, Firebase and REST APIs.
            I have built blogging platforms, dashboards,
            business websites and custom solutions.
          </p>

          <div className="mt-8 space-y-3">

            <div>
              ✅ Clean & Scalable Code
            </div>

            <div>
              ✅ Responsive UI Design
            </div>

            <div>
              ✅ API Integration
            </div>

            <div>
              ✅ Fast Delivery
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-[#08243a] border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-8">
            Technical Skills
          </h3>

          <div className="space-y-6">

            {skills.map((skill, index) => (
              <div key={index}>

                <div className="flex justify-between mb-2">

                  <span>
                    {skill.name}
                  </span>

                  <span className="text-green-400">
                    {skill.level}%
                  </span>

                </div>

                <div className="w-full h-3 bg-black/30 rounded-full">

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: `${skill.level}%` }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="h-3 bg-green-500 rounded-full"
  />

</div>

              </div>
            ))}

          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="bg-black/20 rounded-2xl p-5 text-center">

              <h4 className="text-3xl font-bold text-green-400">
                10+
              </h4>

              <p className="text-white/60">
                Projects
              </p>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 text-center">

              <h4 className="text-3xl font-bold text-green-400">
                5+
              </h4>

              <p className="text-white/60">
                Clients
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}