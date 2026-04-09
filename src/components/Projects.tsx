import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  Layout,
  Smartphone,
  ShoppingCart,
  Lock,
  Wallet,
  Zap,
} from "lucide-react";

const projects = [
  {
    id: 6,
    title: "EV Battery Life Prediction For Swappig Stations",
    year: "2026",
    icon: <Zap className="w-8 h-8" />,
    shortDesc:
      "A machine learning-driven web application designed to optimize electric vehicle (EV) battery swapping stations using dynamic pricing.",
    tags: ["Machine Learning", "Python", "Flask", "Ensemble Learning"],
    details: {
      overview:
        "A machine learning-driven web application designed to optimize electric vehicle (EV) battery swapping stations. By accurately predicting the Remaining Useful Life (RUL) of EV batteries, this system replaces traditional flat-rate charging models with a dynamic, health-aware pricing algorithm, ensuring fair costs for consumers based on actual battery degradation.",
      problem:
        "Electric vehicle batteries degrade non-linearly over time due to repeated charging and discharging cycles. In current battery swapping networks, batteries of vastly different health conditions are exchanged at standard flat rates. This creates significant economic unfairness—users are often charged the same amount for heavily degraded batteries as they are for brand-new ones. Existing infrastructure lacks a reliable, transparent way to estimate battery health and link it directly to consumer pricing.",
      process:
        "Data Engineering: Sourced and pre-processed the standard NASA Lithium-ion Battery Dataset, extracting critical discharge features to model complex degradation patterns. Model Development: Trained and evaluated multiple machine learning models. Built a robust ensemble learning framework combining Random Forest and XGBoost regressors using weighted averaging. Evaluation: Tested the models against standard performance metrics. The ensemble approach successfully achieved the lowest Mean Absolute Error (MAE) and Mean Squared Error (MSE), alongside the highest R² score compared to standalone baseline models. Algorithm Design: Engineered a custom business-logic algorithm to map the continuous RUL predictions directly to a dynamic cost scale. Deployment: Packaged the machine learning pipeline into an interactive web application using Python, Flask, and HTML/CSS/JS, allowing for real-time battery health evaluation and pricing generation.",
      solution:
        "I developed a comprehensive machine learning framework that accurately predicts the Remaining Useful Life (RUL) of EV batteries. By integrating this predictive model with a dynamic pricing calculator, the system automatically adjusts the battery replacement fee. Users are charged proportionally to the exact remaining life and health of the battery they receive, ensuring complete transparency and fairness.",
      novelty:
        "Traditional battery swapping stations operate on a 'blind exchange' flat-rate model. The novelty of this project lies in bridging advanced battery prognostics with consumer economics. Instead of just predicting battery life in an isolated lab environment, this project translates complex ML predictions into a practical, real-world Health-Aware Pricing Strategy, creating a fundamentally new, user-centric business model for EV swapping stations.",
      impact:
        "Consumer Fairness: Eliminates overcharging for degraded batteries, fostering greater consumer trust in EV swapping networks. High Accuracy: The ensemble approach significantly reduced prediction errors, ensuring highly reliable battery health assessments. Sustainability: Promotes better lifecycle management of lithium-ion batteries by precisely tracking their health and optimizing their usage in the field. Real-World Ready: The system is computationally efficient and deployed as a scalable web application, ready for real-time IoT integration.",
    },
  },
  {
    id: 5,
    title: "BudgetBee",
    year: "2026",
    icon: <Wallet className="w-8 h-8" />,
    shortDesc:
      "A daily expense tracker Android app with Firebase authentication, real-time database, and Excel download of monthly reports.",
    tags: ["Android", "Firebase", "Typescript", "Excel"],
    details: {
      overview:
        "BudgetBee is a comprehensive daily expense tracker designed as an Android application to help users manage their personal finances effectively.",
      problem:
        "Users needed a reliable, secure, and easy-to-use mobile application to track their daily expenses and generate monthly reports for better financial planning.",
      process:
        "Developed the Android application using Java, integrated Firebase for secure user authentication and real-time database management, and implemented a feature to export data to Excel.",
      solution:
        "A secure, user-friendly Android app where users can log daily expenses, view spending trends, and download detailed monthly reports in Excel format.",
      impact:
        "Empowered users to take control of their finances with secure data synchronization across devices and easy-to-analyze Excel reports.",
    },
  },
  {
    id: 1,
    title: "College Website Redesign",
    year: "2023",
    icon: <Layout className="w-8 h-8" />,
    shortDesc:
      "Responsive college website built during an internal hackathon. Focused on clean layout design, accessibility, and optimal user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    details: {
      overview:
        "A responsive college website built during an internal hackathon to improve the digital presence of the institution.",
      problem:
        "The existing college website was outdated, not mobile-friendly, and made it difficult for students to navigate and find essential academic resources.",
      process:
        "Conducted user research with students to identify pain points, created wireframes in Figma, and developed a responsive frontend using HTML, CSS, and JavaScript.",
      solution:
        "A clean, accessible, and responsive layout with optimized navigation, ensuring information is easily accessible across all devices.",
      impact:
        "Improved user satisfaction, faster access to academic resources, and a modernized brand image for the college.",
    },
  },
  {
    id: 2,
    title: "MyBudget App",
    year: "2025",
    icon: <Smartphone className="w-8 h-8" />,
    shortDesc:
      "Complete UX prototype for a personal finance application featuring expense tracking, budgeting tools, and spending insights dashboard.",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    details: {
      overview:
        "A comprehensive UX prototype for a personal finance application aimed at helping users manage their money better.",
      problem:
        "Users often struggle to track daily expenses and visualize their spending habits effectively, leading to poor financial decisions.",
      process:
        "Performed competitor analysis, conducted user interviews, mapped out user journeys, and designed high-fidelity interactive prototypes in Figma.",
      solution:
        "An intuitive dashboard featuring seamless expense tracking, customizable budgeting tools, and visual spending insights.",
      impact:
        "Streamlined the budgeting process, making financial tracking engaging and effortless for everyday users.",
    },
  },
  {
    id: 3,
    title: "E-Commerce Interface",
    year: "2024",
    icon: <ShoppingCart className="w-8 h-8" />,
    shortDesc:
      "Modern e-commerce application interface designed in Figma with focus on intuitive navigation and seamless shopping experience.",
    tags: ["Figma", "UX Design", "Wireframing"],
    details: {
      overview:
        "A modern e-commerce application interface designed to enhance the online shopping experience.",
      problem:
        "High cart abandonment rates due to a cluttered, confusing checkout process and poor product discoverability.",
      process:
        "Redesigned the information architecture, created detailed wireframes, and conducted usability testing to refine the user flow.",
      solution:
        "A seamless shopping experience with intuitive navigation, clear product categorization, and a simplified, frictionless checkout flow.",
      impact:
        "Enhanced user engagement, reduced cognitive load during checkout, and created a smoother path to purchase.",
    },
  },
  {
    id: 4,
    title: "Cipher Toolkit",
    year: "2024",
    icon: <Lock className="w-8 h-8" />,
    shortDesc:
      "Encryption and decryption toolkit demonstrating secure data handling concepts and logic building with various cipher algorithms.",
    tags: ["Python", "Security", "Algorithm"],
    details: {
      overview:
        "An educational encryption and decryption toolkit demonstrating secure data handling concepts.",
      problem:
        "There was a need for a simple, accessible tool to demonstrate basic cryptographic algorithms and secure data handling to beginners.",
      process:
        "Researched various cryptographic algorithms (like Caesar, Vigenère) and designed a straightforward command-line interface in Python.",
      solution:
        "A Python-based toolkit implementing multiple cipher algorithms, allowing users to encrypt and decrypt messages easily for educational purposes.",
      impact:
        "Provided a hands-on learning resource for understanding basic cryptography and logic building.",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A showcase of my work in development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute top-8 right-8 text-sm font-bold text-zinc-400 group-hover:text-primary transition-colors">
                {project.year}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {project.shortDesc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Jayanth0923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white text-base font-medium rounded-2xl hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View more on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl z-10"
            >
              <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-zinc-100 p-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-zinc-100 text-zinc-700 text-sm font-semibold rounded-full border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  <Section
                    title="Overview"
                    content={selectedProject.details.overview}
                  />
                  <Section
                    title="Problem"
                    content={selectedProject.details.problem}
                  />
                  <Section
                    title="Process"
                    content={selectedProject.details.process}
                  />
                  <Section
                    title="Solution"
                    content={selectedProject.details.solution}
                  />
                  {selectedProject.details.novelty && (
                    <Section
                      title="Novelty"
                      content={selectedProject.details.novelty}
                    />
                  )}
                  <Section
                    title="Impact"
                    content={selectedProject.details.impact}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="text-lg font-bold text-zinc-900 mb-2">{title}</h4>
      <p className="text-zinc-600 leading-relaxed">{content}</p>
    </div>
  );
}
