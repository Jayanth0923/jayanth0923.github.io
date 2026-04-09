import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              Hello! I'm Mudduluru Jayanth, a Computer Science and Engineering
              student at R.M.K. College of Engineering and Technology. I'm
              passionate about building clean, user-friendly applications that
              blend strong functionality with thoughtful design.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              I enjoy working across both development and design, with hands-on
              experience in Python, SQL, C programming, and frontend
              technologies like HTML, CSS, and JavaScript. I am also a{" "}
              <span className="font-semibold text-primary">
                SAP Certified Backend Developer – ABAP Cloud (2026)
              </span>
              , having completed professional training in SAP ABAP.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Through academic projects and personal work, I've developed skills
              in problem-solving, teamwork, and effective communication. I'm
              always eager to learn new technologies and grow as a developer by
              building real-world solutions.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 h-full">
            <InfoCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="Education"
              desc="B.E. Computer Science"
              delay={0.1}
            />
            <InfoCard
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              desc="Tirupati, India"
              delay={0.2}
            />
            <InfoCard
              icon={<Briefcase className="w-6 h-6" />}
              title="Certification"
              desc="SAP Certified ABAP Cloud"
              delay={0.3}
            />
            <InfoCard
              icon={<Code className="w-6 h-6" />}
              title="Focus"
              desc="Full-Stack & UI/UX"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center justify-center"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-600">{desc}</p>
    </motion.div>
  );
}
