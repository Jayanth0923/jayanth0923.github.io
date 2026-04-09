import { motion } from "motion/react";
import { PenTool, Code2, MonitorSmartphone, Terminal } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    desc: "Creating intuitive wireframes and interactive prototypes that prioritize user experience and visual appeal.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Frontend Development",
    desc: "Developing clean, maintainable frontend code using HTML, CSS, JavaScript, and modern frameworks like React.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "Responsive Web Design",
    desc: "Building websites that look great and work seamlessly across all devices and screen sizes.",
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
  {
    title: "Python Development",
    desc: "Building basic applications and automation scripts using Python programming.",
    icon: <Terminal className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Services tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-20 h-20 mx-auto bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
