export default function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Freelance MERN Developer",
      company: "Self Employed",
      desc: "Developed responsive websites, dashboards, REST APIs and full-stack MERN applications for clients."
    },
    {
      year: "2024 - 2025",
      title: "Frontend Developer",
      company: "Personal Projects",
      desc: "Built React.js applications, admin panels, business websites and modern UI/UX interfaces."
    },
    {
      year: "2025 - 2026",
      title: "Learning & Practice",
      company: "MERN Stack Journey",
      desc: "Focused on React.js, Node.js, Express.js, MongoDB, GitHub and real-world project development."
    }
  ];

  return (
    <section
      id="experience"
      className="px-8 lg:px-16 py-20"
    >
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl font-bold">
          Experience & Journey
        </h2>

        <div className="h-[1px] flex-1 bg-white/10"></div>

      </div>

      <div className="relative">

        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-green-500"></div>

        <div className="space-y-10">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-green-500 border-4 border-[#02111f]"></div>

              <div className="bg-[#08243a] border border-white/10 rounded-3xl p-8">

                <span className="text-green-400 text-sm">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-white/50 mt-1">
                  {item.company}
                </p>

                <p className="text-white/70 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}