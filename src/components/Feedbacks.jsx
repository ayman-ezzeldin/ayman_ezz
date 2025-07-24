const motion = await import("framer-motion").then((mod) => mod.motion);

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "", index * 0.5, 0.75)}
    className=" p-10 rounded-3xl bg-black-200 w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1"></div>

    <p className="text-white tracking-wider text-[18px] mt-4 font-normal">
      {testimonial}
    </p>

    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary font-medium text-[12px]">
          {designation} , {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className="flex flex-col">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-7">
          {testimonials.map((test, index) => (
            <FeedbackCard key={test.name} index={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
