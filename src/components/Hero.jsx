import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto h-[90svh] w-full overflow-hidden bg-transparent"
    >
      {/* Hero Content */}
      <div
        className={`relative z-10 mx-auto flex h-full max-w-7xl flex-row items-start gap-5 ${styles.paddingX}`}
      >
        {/* Vertical Accent Line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="mt-[125px] flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="h-5 w-5 rounded-full bg-white shadow-[0_0_18px_rgba(128,77,238,0.65)]"
          />

          <div className="h-40 w-1 bg-gradient-to-b from-white via-primary to-transparent sm:h-80" />
        </motion.div>

        {/* Main Content */}
        <div className="pt-[120px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-5 w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm"
          >
            <span className="text-xs font-medium tracking-wide text-secondary sm:text-sm">
              Software Developer · Building for Production
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`${styles.heroHeadText} font-semibold leading-[1.05]`}
          >
            Hi, I'm <span className={styles.gridentText}>Ayman M Ezzedlin</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl"
          >
            Building scalable, maintainable, and{" "}
            <span className="green-text-gradient">production-ready</span> web
            applications.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-4 max-w-2xl text-sm leading-7 text-secondary sm:text-base sm:leading-8"
          >
            I build modern web applications with a strong focus on backend
            architecture, APIs, databases, and reliable frontend experiences.
          </motion.p>

          {/* Technical Focus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-6 flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-secondary sm:text-sm"
          >
            <span>Backend Architecture</span>
            <span>APIs</span>
            <span>Databases</span>
            <span>Frontend Engineering</span>
          </motion.div>

          {/* Technologies */}
          <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
            {[
              "TypeScript",
              "Next.js",
              "NestJS",
              "PostgreSQL",
              "Tailwind CSS",
              "Docker",
            ].map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.85 + index * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-secondary backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:text-white sm:text-sm"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.25,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black sm:text-base"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.6,
        }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center xs:bottom-10"
      >
        <a
          href="#about"
          aria-label="Scroll Down to About Section"
          className="group"
        >
          <div className="flex h-[58px] w-[32px] items-start justify-center rounded-3xl border-2 border-secondary/70 p-2 transition-colors duration-200 group-hover:border-secondary sm:h-[64px] sm:w-[35px]">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 rounded-full bg-secondary sm:h-3 sm:w-3"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;