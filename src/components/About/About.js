import React from "react";
import "./About.css";
import Pdf from "./Resume_ReinaKitazawa.pdf";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="greeting">
          <h1>Hi, I am Reina Kitazawa👋</h1>
        </div>
        <h2>Creative front-end develper based in Japan.</h2>
        <h3>
          I am a recent graduate from web development school.
          <br />I enjoy coding and making applications that can make a
          difference in peoples’ lives.
          <br />I am passionate about learning new things.
        </h3>
        <a className="button" href={Pdf} target="_blank">
          Resume
        </a>
      </div>
    </>
  );
};

export default About;
