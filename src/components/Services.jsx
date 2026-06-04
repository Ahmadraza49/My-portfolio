const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and modern user interfaces using React.js, Next.js and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    desc: "Creating secure APIs and server-side applications using Node.js and Express.js.",
  },
  {
    title: "Database Design",
    desc: "MongoDB and Firebase integration with optimized database architecture.",
  },
  {
    title: "Full Stack Development",
    desc: "Complete MERN stack applications from design to deployment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 lg:px-16 py-20">

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">
          My Services
        </h2>

        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#08243a] border border-white/10 rounded-3xl p-8 hover:border-green-500 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4">
              {service.title}
            </h3>

            <p className="text-white/60 leading-7">
              {service.desc}
            </p>

 <div className="mt-6">
  <span className="text-green-400 text-sm font-medium">
    Available for Freelance
  </span>
</div>
          </div>
        ))}

      </div>

    </section>
  );
}