import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
const motion = await import("framer-motion").then((mod) => mod.motion);

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mx-auto "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            loading="lazy"
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain aspect-square"
          />
          <h3 className="text-white font-bold text-[20px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
