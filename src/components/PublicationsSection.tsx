import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const publications = [
  {
    authors: "P. Kumar and A. Khani",
    title: "An Exact Method for Solving the Bi-level Transit Network Design Problem",
    venue: "Under review, 2022",
    link: null,
  },
  {
    authors: "P. Kumar and A. Khani",
    title: "Schedule-based Transit Assignment with Online Information",
    venue: "Transportation Research Part C: Emerging Technologies, 2023",
    link: "https://prameshk.github.io/pdfs/SBAON_revision2.pdf",
  },
  {
    authors: "X. Yu, J. Chen, P. Kumar, A. Khani, and H. Mao",
    title: "An Integrated Framework for Locating Depots in Shared Autonomous Vehicle Systems",
    venue: "Transportmetrica A: Transport Science, 2022",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4036558",
  },
  {
    authors: "P. Kumar and A. Khani",
    title: "Planning of integrated mobility-on-demand and urban transit networks",
    venue: "Transportation Research Part A: Policy and Practice, 2022",
    link: "https://prameshk.github.io/pdfs/submitted_paper.pdf",
  },
  {
    authors: "P. Kumar and A. Khani",
    title: "Adaptive park-and-ride choice on time-dependent stochastic multimodal transportation network",
    venue: "Networks and Spatial Economics, 2021",
    link: "https://link.springer.com/article/10.1007/s11067-021-09545-6",
  },
  {
    authors: "P. Kumar, A. Khani, E. Lind, and J. Levin",
    title: "Estimation and mitigation of epidemic risk on a public transit route using automatic passenger count data",
    venue: "Transportation Research Record, 2021",
    link: "https://journals.sagepub.com/doi/pdf/10.1177/0361198120985133",
  },
  {
    authors: "P. Kumar and A. Khani",
    title: "An algorithm for integrating peer-to-peer ridesharing and schedule-based transit system for first mile/last mile access",
    venue: "Transportation Research Part C: Emerging Technologies, 2021",
    link: "https://arxiv.org/pdf/2007.07488.pdf",
  },
  {
    authors: "P. Kumar and A. Khani",
    title: "Evaluating Special Event Transit Demand: A Robust Principal Component Analysis Approach",
    venue: "IEEE Transactions on Intelligent Transportation Systems, 2021",
    link: "https://prameshk.github.io/pdfs/bare_jrnl.pdf",
  },
  {
    authors: "A. Webb, P. Kumar and A. Khani",
    title: "Estimation of Passenger Wait Time using Automatically Collected Transit Data",
    venue: "Public Transport, 2020",
    link: "https://prameshk.github.io/pdfs/WTE_Springer.pdf",
  },
  {
    authors: "P. Kumar, A. Khani, and G. Davis",
    title: "Transit Route Origin-Destination Matrix Estimation using Compressed Sensing",
    venue: "Transportation Research Record, 2019",
    link: "https://prameshk.github.io/pdfs/Kumar%20et%20al%202018_Revision1_ak.pdf",
  },
  {
    authors: "P. Kumar, A. Khani, and Q. He",
    title: "A Robust Estimation of Transit Passenger Trajectories using Automated Data",
    venue: "Transportation Research Part C: Emerging Technologies, 2018",
    link: "https://prameshk.github.io/pdfs/TRC_2018_123_rv_2.pdf",
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? publications : publications.slice(0, 5);

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Publications</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Selected Works
          </motion.h2>

          <div className="space-y-6">
            {displayed.map((pub, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group border-l-2 border-border hover:border-accent pl-6 py-2 transition-colors"
              >
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-subtle italic">{pub.venue}</span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      <ExternalLink size={12} /> PDF
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {publications.length > 5 && (
            <motion.div variants={fadeInUp} className="mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm font-medium text-accent hover:underline transition-colors"
              >
                {showAll ? "Show fewer" : `Show all ${publications.length} publications`}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
