import React from "react";
import "./Home.css";
import Me from "../../asset/avatar-1.svg";
import Headersocial from "./headersocial";
import Scrolldown from "./Scrolldown";
import Shapes from "./shapes";
function home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Mridul Pandey</h1>
        <span className="home__education">I'm a Front-End Developer</span>

        <Headersocial />

        <a href="#contact" className="btn"> Hire Me <i class="fa-regular fa-file-lines"></i></a>
   
        <Scrolldown />

      <Shapes/>
      </div>
    </section>
  );
}

export default home;
