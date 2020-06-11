import React from "react";
import { Card } from "./Card";

export const Form = props => {
  const handleSubmit = e => {
    e.preventDefault();
    //e.setState(); Submit Action
  };
  const handleChange = e => {
    //setState(e.target.value); Update Action here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="text" value={props.value} onChange={handleChange} />
          </label>
          <button>CLICK</button>
        </div>
        <Card />
      </form>
    </>
  );
};
