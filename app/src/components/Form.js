import React from "react";
import { card } from "./Card";

export const Form = () => {
  handleSubmit = e => {
    e.preventDefault();
    setState();
  };
  handleChange = e => {
    setState(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="text" value={} onClick={handleChange} />
          </label>
        </div>
        <Card />
      </form>
    </>
  );
};
