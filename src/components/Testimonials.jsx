const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    review:
      "Ahmad built a clean and responsive website for our business. The performance is smooth and the design looks very modern."
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    review:
     "Very professional developer. Communication was clear and the project was delivered on time with clean code."
  },
  {
    name: "Sarah Wilson",
    role: "Entrepreneur",
    review:
      "Great MERN developer who understands both frontend and backend development.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-8 lg:px-16 py-20">

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">
          Client Testimonials
        </h2>

        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#08243a] border border-white/10 rounded-3xl p-8"
          >
            <p className="text-white/70 leading-7">
              "{item.review}"
            </p>

            <div className="mt-6">
              <h4 className="font-bold">
                {item.name}
              </h4>

              <p className="text-green-400 text-sm">
                {item.role}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}