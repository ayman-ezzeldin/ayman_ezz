import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { frontend_projects, backend_projects, ui_projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { lazy, Suspense } from "react";
import Loading from "./Loading";

const ProjectCarousel = lazy(() => import("./ProjectCarousel"));

const Works = () => {
  const projectArrays = [
    { name: "Frontend", projects: frontend_projects },
    { name: "Backend", projects: backend_projects },
    { name: "UI", projects: ui_projects },
  ];

  const getUniqueTags = (projects) => {
    const allTags = projects.flatMap((project) => project.tags);
    const uniqueTagsMap = new Map();
    allTags.forEach((tag) => {
      const normalizedName = tag.name.trim().toLowerCase();
      if (!uniqueTagsMap.has(normalizedName)) {
        uniqueTagsMap.set(normalizedName, tag);
      }
    });
    return Array.from(uniqueTagsMap.values());
  };

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

      <div className="mt-10 md:mt-20 space-y-16">
        {projectArrays.map(({ name, projects }) => {
          const uniqueTags = getUniqueTags(projects);

          if (projects.length === 0) return null;

          return (
            <motion.div
              key={name}
              variants={fadeIn("up", "spring", 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3 className="text-white text-[32px] md:text-[40px] font-bold mb-4">
                {name}
              </h3>

              {uniqueTags.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-3">
                  {uniqueTags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[14px] ${tag.color} px-3 py-1 rounded-full bg-tertiary/50`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              )}

              <Suspense fallback={<Loading />}>
                <ProjectCarousel projects={projects} category={name} />
              </Suspense>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works);
