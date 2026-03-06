import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Contact</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-8">
            Let's Connect
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/70 max-w-lg mx-auto mb-10 text-lg">
            If you'd like to chat about transit research, collaboration, or joining my group, 
            feel free to reach out.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:pkk@iitd.ac.in"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent-glow transition-colors"
            >
              <Mail size={18} />
              pkk@iitd.ac.in
            </a>
            <a
              href="https://civil.iitd.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              <ExternalLink size={18} />
              Department Page
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-2 text-sm text-primary-foreground/50">
            <MapPin size={14} />
            Department of Civil Engineering, IIT Delhi, New Delhi, India
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
