const stats = [
  {
    number: "10+",
    label: "Projects"
  },
  {
    number: "5+",
    label: "Clients"
  },
  {
    number: "2+",
    label: "Years Experience"
  },
  {
    number: "100%",
    label: "Satisfaction"
  }
];

export default function Stats() {
  return (
    <section className="px-8 lg:px-16 pb-24">

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#071d2b] border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-4xl font-bold text-green-400">
              {item.number}
            </h2>

            <p className="mt-2 text-white/60">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}