import { useRef, useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loading from "./Loading";

const ProjectCard = lazy(() => import("./ProjectCard"));

const ProjectCarousel = ({ projects, category }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollIntervalRef = useRef(null);
  const isHoveredRef = useRef(false);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 350 : 400;
      const gap = 28;
      const scrollAmount = cardWidth + gap;

      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleScroll = () => checkScrollButtons();
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      const startAutoScroll = () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        autoScrollIntervalRef.current = setInterval(() => {
          if (scrollElement && !isHoveredRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
            if (scrollLeft >= scrollWidth - clientWidth - 10) {
              scrollElement.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              const isMobile = window.innerWidth < 768;
              const cardWidth = isMobile ? 350 : 400;
              const gap = 28;
              const scrollAmount = cardWidth + gap;
              scrollElement.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
              });
            }
          }
        }, 3000);
      };

      startAutoScroll();

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
      };
    }
  }, [projects]);

  return (
    <div
      className="relative w-full mt-8"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        ref={scrollRef}
        className="flex gap-7 overflow-x-auto scroll-smooth scrollbar-hide items-start"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Suspense fallback={<Loading />}>
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px]"
            >
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </Suspense>
      </div>

      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-tertiary/80 hover:bg-tertiary p-3 rounded-full shadow-lg z-10 transition-all"
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-tertiary/80 hover:bg-tertiary p-3 rounded-full shadow-lg z-10 transition-all"
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProjectCarousel;
