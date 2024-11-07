import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  );
}
