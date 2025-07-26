import Tilt from "react-parallax-tilt";
import { demo, github } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary w-full h-full p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full h-full object-cover aspect-square rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-1 justify-end m-3 card-img_hover">
            {source_demo_link && (
              <div
                onClick={() => window.open(source_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  loading="lazy"
                  src={demo}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain aspect-square"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain aspect-square"
                />
              </div>
            )}
          </div>
        </div>

          <div className="mt-5 flex flex-col justify-between ">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-ellipsis overflow-hidden h-25 text-[14px]">
              {description}
            </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
          </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
