import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const courses = [
  { semester: "Fall 2025", name: "CVL8550: Traffic Assignment and its Applications", link: "https://prameshk.github.io/CVL8550/CVL8550.html" },
  { semester: "Spring 2025", name: "CVL461: Logistics and Freight Transportation", link: "https://prameshk.github.io/CVL461/CVL461.html" },
  { semester: "Fall 2024", name: "CVL746: Public Transportation Systems", link: "https://prameshk.github.io/CVL746/CVL746.html" },
  { semester: "Spring 2024", name: "CVL851: Transportation Network Optimization", link: "https://prameshk.github.io/CVL851/CVL851.html" },
];

const TeachingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teaching" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Teaching</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Courses
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, i) => (
              <motion.a
                key={i}
                href={course.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeInUp}
                className="bg-background rounded-lg p-6 border border-border hover:border-accent/40 transition-all group block"
              >
                <span className="text-xs font-mono text-accent tracking-wide">{course.semester}</span>
                <h3 className="font-display text-base font-semibold text-foreground mt-2 group-hover:text-accent transition-colors leading-snug">
                  {course.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-3 group-hover:text-accent transition-colors">
                  <ExternalLink size={12} /> Course Website
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingSection;
