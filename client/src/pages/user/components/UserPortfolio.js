import React from "react";

const UserPortfolio = props => {
  const { profile } = props;

  return (
    <>
      {props.showForm === "newPortfolio" ? (
        <>
          <ul>
            {profile.portfolio.map((pf, i) => {
              return (
                <li key={i}>
                  <button type="button" onClick={() => props.handleRemove(pf)}>
                    {pf} X
                  </button>
                </li>
              );
            })}
          </ul>
          <input
            type="text"
            name="newPortfolio"
            value={props.value}
            onChange={props.onChange}
          />
          <button type="submit" onSubmit={props.onSubmit}>
            Save
          </button>
        </>
      ) : profile.portfolio[0] ? (
        <>
          <ul>
            {profile.portfolio.map((pf, i) => {
              return <li key={i}>{pf}</li>;
            })}
          </ul>
          <button name="newPortfolio" onClick={props.onClick}>
            edit
          </button>
        </>
      ) : (
        <>
          <button name="newPortfolio" onClick={props.onClick}>
            Add Portfolio
          </button>
        </>
      )}
    </>
  );
};

export default UserPortfolio;
