import React from "react";
import "./Value.css";
const Value = (props) => {
  return (
    <div className="value-container">
      <img className="value-logo" src={props.image} width={50} height={50} />
      <div className="value-text">
        <div className="value-title">{props.title}</div>
        <div className="value-desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default Value;
