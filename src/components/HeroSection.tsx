import { motion } from "framer-motion";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Transit network illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            Assistant Professor · IIT Delhi
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Pramesh Kumar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed max-w-2xl mb-8"
          >
            Researching public transit and its integration with emerging technologies — 
            from network design to autonomous vehicles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#research"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent-glow transition-colors tracking-wide"
            >
              Explore Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors tracking-wide"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
