import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
            Education & <span className="text-primary">Certificates</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            My academic journey and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Academic Background
            </h3>
            <div className="space-y-6">
              <TimelineItem
                title="Bachelor of Engineering"
                subtitle="Computer Science and Technology"
                institution="R.M.K College of Engineering and Technology, Tiruvallur"
                year="2022 - 2026"
                score="CGPA: 7.20"
                current
              />
              <TimelineItem
                title="12th Grade (Intermediate)"
                subtitle="Higher Secondary"
                institution="Viswasai Jr. College, Tirupati"
                year="2022"
                score="70%"
              />
              <TimelineItem
                title="10th Grade (SSC)"
                subtitle="Secondary School"
                institution="JCR's Chaitanya E.M High School, Tirupati"
                year="2020"
                score="73%"
              />
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm"
            >
              <ul className="space-y-6">
                <CertItem
                  title="SAP Certified – Backend Developer – ABAP Cloud"
                  issuer="SAP"
                  link="https://drive.google.com/file/d/115q3g2w_rusJbJDuUOo3kdMPZsRz4Ibj/view?usp=sharing"
                />
                <CertItem title="Python Certification" issuer="Udemy" />
                <CertItem title="UI/UX Design Certification" issuer="Corizo" />
                <CertItem title="MongoDB Certification" issuer="MongoDB" />
                <CertItem title="AWS Webinar" issuer="DevTown" />
                <CertItem title="AI Workshop" issuer="IIT Madras" />
                <CertItem title="Internal Hackathon" issuer="RMKCET" />
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  subtitle,
  institution,
  year,
  score,
  current,
}: {
  title: string;
  subtitle: string;
  institution: string;
  year: string;
  score: string;
  current?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-zinc-200"
    >
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-white" />
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-primary text-sm">{year}</span>
          {current && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
              Current
            </span>
          )}
        </div>
        <h4 className="font-bold text-lg text-zinc-900 mb-1">{title}</h4>
        <p className="text-sm font-medium text-zinc-600 mb-2">{subtitle}</p>
        <p className="text-sm text-zinc-500 mb-4">{institution}</p>
        <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold rounded-lg border border-zinc-200">
          {score}
        </div>
      </div>
    </motion.div>
  );
}

function CertItem({
  title,
  issuer,
  link,
}: {
  title: string;
  issuer: string;
  link?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
        <Award className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-zinc-900">{title}</h4>
        <p className="text-zinc-600">
          {issuer}
          {link && (
            <span className="ml-2 text-primary hover:underline font-medium">
              • Credly
            </span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <li>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
