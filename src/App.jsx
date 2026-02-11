import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Certificate from "./sections/Certificate";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectDesc from "./sections/ProjectDesc";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 15000 * 2,
    });
  }, []);
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experiences />
              <Certificate />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDesc />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
