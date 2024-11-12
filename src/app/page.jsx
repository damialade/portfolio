import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import projectsData from "./components/projects/projects.json";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Projects projectsData={projectsData} />
      <Footer />
    </Fragment>
  );
}
