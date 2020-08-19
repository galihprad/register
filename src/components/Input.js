import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.data[props.name] = e.target.value;
  };

  return (
    <div style={inputStyle}>
      <label style={labelStyle}>{props.label}</label>
      <input
        style={inputBoxStyle}
        type={props.type}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Input;

////////// STYLING /////////////

const labelStyle = {
  fontSize: 12,
  margin: "0 0 5px 0",
  color: "#2b3c5e",
  opacity: 0.7,
};

const inputStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "15px 0",
  width: "45%",
  minWidth: "200px",
  maxWidth: "245px",
};

const inputBoxStyle = {
  height: "32px",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #e4e7ea",
  background: "white",
};
