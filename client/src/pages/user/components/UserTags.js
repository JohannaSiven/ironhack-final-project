import React from "react";
import { tags } from "../Keywords";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const UserTags = props => {
  const { profile } = props;

  return (
    <>
      {props.showForm === "newTag" ? (
        <>
          <ul>
            {profile.tags.map((tag, i) => {
              return (
                <li key={i}>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => props.handleRemove(tag)}
                  >
                    <FaTrashAlt color="red" /> {tag}
                  </button>
                </li>
              );
            })}
          </ul>
          <select name="newTag" onChange={props.onChange}>
            {tags.map(tag => {
              return (
                <option value={tag} key={tag}>
                  {tag}
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
      ) : profile.tags[0] ? (
        <>
          <ul>
            {profile.tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
          <button className="editButton" name="newTag" onClick={props.onClick}>
            <FaPen />
          </button>
        </>
      ) : (
        <>
          <button className="editButton" name="newTag" onClick={props.onClick}>
            ADD TAGS
          </button>
        </>
      )}
    </>
  );
};

export default UserTags;
