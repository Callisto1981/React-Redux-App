import React from "react";
import { card } from "./Card";

export const Form = props => {
  handleSubmit = e => {
    e.preventDefault();
    setState();
  };
  handleChange = props => {
    props.setState(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="text" value={props.value} onClick={handleChange} />
          </label>
          <button>CLICK</button>
        </div>
        <Card />
      </form>
    </>
  );
};
