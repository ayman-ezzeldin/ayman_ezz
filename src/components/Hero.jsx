import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      className={`relative bg-bgColor bg-cover bg-no-repeat bg-center w-full h-[90svh] mx-auto`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white-100 via-primary to-bgColor " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} ${styles.gridentText}`}>
            Hi, I'm Ayman M Ezzedlin
          </h1>
          <p className={`${styles.heroSubText} ${styles.gridentText} mt-2`}>
            CSE Graduate | Frontend developer <br className="sm:block hidden" />
            Frontend Lead at GDG On Campus
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll Down to About Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
