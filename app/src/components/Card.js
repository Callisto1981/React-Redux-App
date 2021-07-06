import React from "react";

export const Card = props => {
  return (
    <>
      <div>
        <h3>{props.name}</h3>
        <h3>{props.language}</h3>
      </div>
    </>
  );
};
