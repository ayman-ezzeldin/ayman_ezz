import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="hidden md:flex flex-row flex-wrap justify-center gap-10"
    >
      {inView &&
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
