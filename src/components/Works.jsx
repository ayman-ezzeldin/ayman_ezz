import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
const Works = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled sofware engineer with experience in web development.I'm a
        student of CSE at Google DSC Zag. I'm passionate about web development
        and I'm always looking for new projects to work on.
      </motion.p>
      
    </>
  );
};

export default SectionWrapper(Works);
