import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  const { ref: starsRef, inView: starsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />
      <div className="relative z-0 bg-bgColor selection:bg-inherit selection:text-primary">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
