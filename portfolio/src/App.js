import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Experience from "./component/experience/experience";
import Contact from "./component/contact/Contact";
import Project from "./component/project/project";
import Sidebar from "./component/sidebar/sidebar";
import Skills from "./component/skills/skills";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience/>
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
