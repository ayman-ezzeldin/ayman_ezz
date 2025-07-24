const motion = await import("framer-motion").then((mod) => mod.motion);

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { lazy, Suspense } from "react";
import Loading from "./Loading";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Works = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="-mt-7 md:mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Make up to{" "}
          <span className="text-[#32c976] font-bold">15+ project</span>.
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className=" mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <Suspense fallback={<Loading />}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default SectionWrapper(Works);
