import React from "react";
import { tags } from "../Keywords";

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
                  <button type="button" onClick={() => props.handleRemove(tag)}>
                    {tag} X
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
          <button type="submit">ADD</button>
          <button type="button" onClick={props.hideForm}>
            SAVE
          </button>
        </>
      ) : profile.tags[0] ? (
        <>
          <ul>
            {profile.tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
          <button name="newTag" onClick={props.onClick}>
            edit
          </button>
        </>
      ) : (
        <>
          <button name="newTag" onClick={props.onClick}>
            ADD Tags
          </button>
        </>
      )}
    </>
  );
};

export default UserTags;
