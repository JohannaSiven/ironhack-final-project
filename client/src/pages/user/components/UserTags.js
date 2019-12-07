import React from "react";

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
          <input
            type="text"
            name="newTag"
            value={props.value}
            onChange={props.onChange}
          />
          <button type="submit" onSubmit={props.onSubmit}>
            Save
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
            Add Portfolio
          </button>
        </>
      )}
    </>
  );
};

export default UserTags;
