import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Modeling and designing information for public transport networks",
    role: "PI",
    sponsor: "ARG-MATRICS, Anusandhan National Research Foundation",
  },
  {
    title: "Assessing the impact of park-and-ride facilities at metro stations in Bengaluru",
    role: "Co-PI",
    sponsor: "Directorate of Urban Land Transport, Government of Karnataka",
  },
  {
    title: "Decision Support Framework for Infrastructure and Operational Planning of Electric Freight",
    role: "Co-PI",
    sponsor: "National Mission on Himalayan Studies",
  },
  {
    title: "Designing pricing for integrated transportation systems",
    role: "PI",
    sponsor: "Prime Minister Early Career Research Grant, ANRF",
  },
  {
    title: "Distributionally robust design of transit service",
    role: "PI",
    sponsor: "IIT Delhi Startup Grant",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Research</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sponsored Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground mb-12 max-w-2xl">
            My research focuses on transit assignment, network design, fare pricing, and the integration 
            of emerging mobility services with public transit systems.
          </motion.p>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-background rounded-lg p-6 border border-border hover:border-accent/40 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{project.sponsor}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full tracking-wide">
                    {project.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
