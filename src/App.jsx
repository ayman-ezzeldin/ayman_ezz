import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
} from "./components";

import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

const Works = lazy(()=> import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const NotFound = lazy(() => import("./Pages/NotFound"));
// const Resume = lazy(() => import("./Pages/Resume"));
// const Blog = lazy(() => import("./Pages/Blog"));
// const BlogPost = lazy(() => import("./Pages/BlogPost"));

function App() {
  const { ref: starsRef, inView: starsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <BrowserRouter>
    <Toaster position="bottom-right" />
      <div className={`relative z-0 bg-bgColor selection:bg-inherit selection:text-primary  `}>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="">
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Suspense fallback={<Loading />}>
                    <Works />
                  </Suspense>
                  <Feedbacks />

                  <div className="relative z-0" ref={starsRef}>
                    <Contact />
                    {starsVisible && (
                      <Suspense fallback={<Loading />}>
                        <StarsCanvas />
                      </Suspense>
                    )}
                  </div>

                  <Footer />
                </div>
              }
            />

            {/* <Route path="/resume" element={<Resume />} /> */}
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
