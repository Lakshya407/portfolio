import { lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";

const About = lazy(() => import("./sections/About"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <LazySection minHeight="80vh">
        <About />
      </LazySection>
      <LazySection minHeight="80vh">
        <Services />
      </LazySection>
      <LazySection minHeight="80vh">
        <Projects />
      </LazySection>
      <LazySection minHeight="60vh">
        <Experiences />
      </LazySection>
      <LazySection minHeight="60vh">
        <Testimonial />
      </LazySection>
      <LazySection minHeight="60vh">
        <Contact />
      </LazySection>
      <LazySection minHeight="10vh">
        <Footer />
      </LazySection>
    </div>
  );
};

export default App;
