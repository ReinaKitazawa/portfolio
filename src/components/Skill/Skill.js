import React from "react";
import { skills } from "../portfolio";
import "./Skill.css";

const Skill = () => {
  if (!skills.length) return null;
  return (
    <div className="container">
      <h2 id="skills">SKILLS</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Skill;
