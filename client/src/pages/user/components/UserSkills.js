import React from "react";
import { skills } from "../Keywords";

const UserSkills = props => {
  const { profile } = props;
  return (
    <>
      {props.showForm === "newSkill" ? (
        <>
          <ul>
            {profile.skills.map((skill, i) => {
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => props.handleRemove(skill)}
                  >
                    {skill} X
                  </button>
                </li>
              );
            })}
          </ul>
          <select
            name="newSkill"
            onChange={props.onChange}
            // defaultValue={profile.skills}
          >
            {skills.map(skill => {
              return (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
          <button type="submit">ADD</button>
          <button type="button" onClick={props.hideForm}>
            SAVE
          </button>
        </>
      ) : profile.skills[0] ? (
        <>
          <ul>
            {profile.skills.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </ul>
          <button name="newSkill" onClick={props.onClick}>
            edit
          </button>
        </>
      ) : (
        <>
          <button name="newSkill" onClick={props.onClick}>
            ADD Skills
          </button>
        </>
      )}
    </>
  );
};

export default UserSkills;
