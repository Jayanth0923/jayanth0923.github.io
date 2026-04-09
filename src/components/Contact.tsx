import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="Jayanthmuddulurt2004@gmail.com"
                href="mailto:Jayanthmuddulurt2004@gmail.com"
              />
              <ContactItem
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                value="+91 9494404982"
                href="tel:+919494404982"
              />
              <ContactItem
                icon={<Github className="w-6 h-6" />}
                title="GitHub"
                value="Jayanth0923"
                href="https://github.com/Jayanth0923"
              />
              <ContactItem
                icon={<Linkedin className="w-6 h-6" />}
                title="LinkedIn"
                value="Mudduluru Jayanth"
                href="https://www.linkedin.com/in/muddulurujayanth"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">
              Send Message
            </h3>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y"
                ></textarea>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-100"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-lg font-medium rounded-2xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-6 p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-zinc-900 mb-1">{title}</h4>
        <p className="text-zinc-600 group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
}
