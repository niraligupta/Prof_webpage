import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const interests1 = [
    "Transit automated data (AFC, APC, AVL) mining",
    "Transit route choice & assignment",
    "Transit network design",
    "Transit scheduling & fare pricing",
  ];

  const interests2 = [
    "Transit electrification",
    "Ridesharing",
    "Autonomous vehicles",
    "Drones & Park-and-ride",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">About</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Hello!
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm an assistant professor in the{" "}
            <a href="https://civil.iitd.ac.in/" className="text-accent hover:underline" target="_blank" rel="noreferrer">
              Department of Civil Engineering
            </a>{" "}
            at{" "}
            <a href="https://home.iitd.ac.in/" className="text-accent hover:underline" target="_blank" rel="noreferrer">
              IIT Delhi
            </a>
            . I got my Ph.D. in Civil Engineering from the{" "}
            <a href="https://twin-cities.umn.edu/" className="text-accent hover:underline" target="_blank" rel="noreferrer">
              University of Minnesota at Twin Cities
            </a>
            , where I was advised by{" "}
            <a href="https://cse.umn.edu/isye/alireza-khani" className="text-accent hover:underline" target="_blank" rel="noreferrer">
              Alireza Khani
            </a>.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm interested in researching <strong className="text-foreground">public transit and its integration with emerging technologies</strong>.
            The methodologies that find applications in my research are large-scale data analytics, optimization,
            uncertainty modeling, and mechanism design.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="bg-section-alt rounded-lg p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Transit Service Operations
              </h3>
              <ul className="space-y-2">
                {interests1.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1.5 text-xs">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-section-alt rounded-lg p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Emerging Technologies
              </h3>
              <ul className="space-y-2">
                {interests2.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1.5 text-xs">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
