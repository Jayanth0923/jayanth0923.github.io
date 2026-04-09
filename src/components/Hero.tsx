import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Software Developer & UI/UX Designer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-zinc-900 leading-tight mb-6">
              Hello, my name is <br />
              <span className="text-primary">Mudduluru Jayanth</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed">
              Building clean, intuitive, and user-focused digital experiences. I
              blend strong functionality with thoughtful design to solve
              real-world problems.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-medium rounded-2xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 border border-zinc-200 text-base font-medium rounded-2xl hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-5">
              <SocialLink
                href="https://github.com/Jayanth0923"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/muddulurujayanth"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:jayanthmuddulurt2004@gmail.com"
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-[2rem] bg-zinc-100 border border-zinc-200 shadow-2xl overflow-hidden flex items-end justify-center"
          >
            {/* Fallback image placeholder if the actual image is not available */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent -z-10" />
            <img
              src="/20240312_150553-removebg-preview.png"
              alt="Mudduluru Jayanth"
              className="w-full h-full object-contain object-bottom"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-primary hover:border-primary hover:shadow-md transition-all"
    >
      {icon}
    </a>
  );
}
