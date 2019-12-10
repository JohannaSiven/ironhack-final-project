import React from "react";
import { skills } from "../Keywords";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

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
                    className="deleteButton"
                  >
                    <FaTrashAlt color="red" /> {skill}
                  </button>
                </li>
              );
            })}
          </ul>
          <select name="newSkill" onChange={props.onChange}>
            {skills.map(skill => {
              return (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
          <button className="editButton" type="submit">
            ADD
          </button>
          <button className="saveButton" type="button" onClick={props.hideForm}>
            <FaCheck />
          </button>
        </>
      ) : profile.skills[0] ? (
        <>
          <ul>
            {profile.skills.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </ul>
          <button
            className="editButton"
            name="newSkill"
            onClick={props.onClick}
          >
            <FaPen />
          </button>
        </>
      ) : (
        <>
          <button
            className="editButton"
            name="newSkill"
            onClick={props.onClick}
          >
            ADD SKILLS
          </button>
        </>
      )}
    </>
  );
};

export default UserSkills;
