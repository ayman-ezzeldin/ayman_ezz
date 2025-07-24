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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled sofware engineer with experience in web development.I'm a
        student of CSE at Google DSC Zag. I'm passionate about web development
        and I'm always looking for new projects to work on.
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
