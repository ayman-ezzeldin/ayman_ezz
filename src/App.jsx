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

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className=" mb-24 ">
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
