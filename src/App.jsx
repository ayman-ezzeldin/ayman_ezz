import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Resume from "./Pages/Resume";
import NotFound from "./Pages/NotFound";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <Navbar />
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
                  <StarsCanvas />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
