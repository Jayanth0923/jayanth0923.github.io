import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xl font-display font-bold tracking-tight">
          Mudduluru Jayanth
        </p>

        <div className="flex items-center gap-6">
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

        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
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
      className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white hover:bg-zinc-700 transition-all"
    >
      {icon}
    </a>
  );
}
