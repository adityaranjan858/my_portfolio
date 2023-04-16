import React, { Fragment } from "react";
import About from "../about/About";
import Certifications from "../certifications/Certifications";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import Navbar from "./Navbar";
import Project from "../projects/Project";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Certifications/>
      <Footer />
    </Fragment>
  );
};

export default Home;
