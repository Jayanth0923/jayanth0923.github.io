import { motion } from "motion/react";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "HTML", "CSS"],
  },
  {
    category: "SAP",
    items: ["SAP ABAP Cloud"],
  },
  {
    category: "Tools & Technologies",
    items: ["GitHub", "Flask", "VS Code"],
  },
  {
    category: "Concepts",
    items: ["Machine Learning", "UI/UX Design", "Software Development", "OOP", "GenAI"],
  },
  {
    category: "Design",
    items: ["Wireframing", "UI/UX Design", "Prototyping", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A diverse toolkit for building modern digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-zinc-900 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-xl border border-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
