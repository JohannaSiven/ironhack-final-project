import React from "react";

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
          <input
            type="text"
            name="newSkill"
            value={props.newSkill}
            onChange={props.onChange}
          />
          <button type="submit" onSubmit={props.onSubmit}>
            Save
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
            Add Skills
          </button>
        </>
      )}
    </>
  );
};

export default UserSkills;
