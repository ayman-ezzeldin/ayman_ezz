import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
import Footer from "./components/Footer";
import Loading from "./components/Loading";
const Resume = lazy(() => import("./Pages/Resume"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogPost = lazy(() => import("./Pages/BlogPost"));


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="  ">
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Works />
                  <Feedbacks />
                  <div className="relative z-0">
                    <Contact />
                    <Suspense fallback={<Loading />}>
                      <StarsCanvas />
                    </Suspense>
                  </div>
                  <Footer />
                </div>
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
