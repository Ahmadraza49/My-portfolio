import blogify from "../assets/blogify.png";
import goods from "../assets/goods.png";
import food from "../assets/food.png";
import chatify from "../assets/chatify.png";
import astore from "../assets/astore.png";

const projects = [
    {
    title: "Ahmad Store",
    image: astore,
    desc: "Full-stack e-commerce application with AI integration.",
    tech: ["React", "Node", "MongoDB"],
    live: "https://ahmad-store.vercel.app/",
    github: "https://github.com/Ahmadraza49/Ahmad-store",
  },
  {
    title: "Blogify",
    image: blogify,
    desc: "Full-stack blogging platform with authentication and CRUD functionality.",
    tech: ["React", "Node", "MongoDB"],
    live: "https://blog-delta-three-63.vercel.app/",
    github: "https://github.com/Ahmadraza49/blogify",
  },
  {
    title: "Chatify",
    image: chatify,
    desc: "Real-time chat application with WebSocket integration.",
    tech: ["React", "Nodejs", "Socket.IO"],
    live: "https://chatify-app-plum.vercel.app/",
    github: "https://github.com/Ahmadraza49/chatify-app",
  },
  {
    title: "Business Website",
    image: goods,
    desc: "Modern responsive business website built with React and Tailwind.",
    tech: ["React", "Tailwind"],
    live: "https://ch-goods.vercel.app/",
    github: "https://github.com/Ahmadraza49/Goods-Transport-Business-Site",
  },
  {
    title: "Food Delivery App",
    image: food,
    desc: "Modern food ordering UI with responsive design.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 lg:px-16 py-20">

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#08243a] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-white/60 mt-3">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-500/10 text-green-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href={project.live}
                  className="bg-green-500 text-black px-4 py-2 rounded-full"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="border border-white/20 px-4 py-2 rounded-full"
                >
                  GitHub
                </a>

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}