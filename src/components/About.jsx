import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { lazy, Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

const ServiceCard = lazy(() => import("./ServiceCard"));

const About = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a Computer and Systems Engineering graduate (Class of 2025) with a
        strong focus on web development. Over the past few years, I’ve built 15+
        projects — some delivered to real clients — using modern tools like
        React, Next.js, and Tailwind CSS. I care deeply about clean design,
        performance, and user experience. Currently, I’m sharpening my frontend
        skills while exploring backend development to grow as a full-stack
        engineer. I also led the frontend team at GDG On Campus for 2 years,
        mentoring and building with amazing teams.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        <Suspense fallback={<Loading />}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
