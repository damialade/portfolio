import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", years: 3 },
    { name: "CSS", years: 3 },
    { name: "React/Next", years: 3 },
    { name: "JavaScript", years: 3 },
    { name: "Typescript", years: 2 },
    // { name: "Angular", years: 1 },
    { name: "Accessibility", years: 2 },
  ];

  return (
    <div className="skills-container">
      <hr />
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-year">{skill.years} years</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
