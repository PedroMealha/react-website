import { Fragment } from "react";

import Progress from "../progress/progress.component";

import "./skills.styles.scss";

import STACK_DATA from "../skills/skills.db";

const Skills = () => {
  return (
    <Fragment>
      {STACK_DATA.map((group) => {
        const { area, skills } = group;

        return (
          <Fragment key={area}>
            <h4>{area}</h4>
            <div className="skills">
              {skills.map((skill) => (
                <Progress key={skill.title} skill={skill} />
              ))}
            </div>
          </Fragment>
        );
      })}
      <p className="learning">
        <span>*</span> actively learning
      </p>
    </Fragment>
  );
};

export default Skills;
