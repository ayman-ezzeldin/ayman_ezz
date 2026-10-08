import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Privacy from "./Pages/privacy";

import { Toaster } from "react-hot-toast";

const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />

      <div className="relative z-0 min-h-screen overflow-hidden bg-bgColor selection:bg-inherit selection:text-primary">
        <Navbar />

        {/* Global Stars Background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <main className="relative z-10">
                    <Hero />
                    <About />
                    <Experience />
                    <Tech />

                    <Suspense fallback={<Loading />}>
                      <Works />
                    </Suspense>

                    <Feedbacks />
                    <Contact />
                  </main>

                  <Footer />
                </>
              }
            />

            <Route path="/privacy" element={<Privacy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

