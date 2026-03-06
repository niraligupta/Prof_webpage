import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PositionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="positions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Positions</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Join My Research Group
          </motion.h2>

          <motion.div variants={fadeInUp} className="bg-section-alt rounded-lg p-8 border border-border mb-6">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Ph.D. / M.S.(R) Positions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am looking for highly motivated Ph.D. or M.S.(R) students to join my research group 
              working on transit network modeling problems.
            </p>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">Desired Qualifications</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">◆</span>
                Bachelor's/master's in Civil Engineering, Transportation, OR, CS, Applied Math, or allied areas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">◆</span>
                At least one year programming experience in C/C++, Python, Java, or R
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">◆</span>
                Strong aptitude in mathematical modeling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">◆</span>
                Undergraduate-level linear algebra, linear programming, and probability theory
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-section-alt rounded-lg p-8 border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              B.Tech. Projects (IIT Delhi Students)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IIT Delhi B.Tech. students interested in working on their major project are welcome to apply. 
              Programming experience and coursework in transportation are preferred.
            </p>
            <a
              href="mailto:pkk@iitd.ac.in"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent-glow transition-colors"
            >
              Send your CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PositionsSection;
