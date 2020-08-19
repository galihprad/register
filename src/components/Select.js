import React, { useState } from "react";

const Select = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.data[props.name] = e.target.value;
  };

  return (
    <div style={selectStyle}>
      <label style={labelStyle}>{props.label}</label>
      <select
        style={selectBoxStyle}
        value={value}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        {props.options &&
          props.options.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;

////////// STYLING /////////////

const labelStyle = {
  fontSize: 12,
  margin: "0 0 5px 0",
  color: "#2b3c5e",
  opacity: 0.7,
};

const selectStyle = {
  display: "Flex",
  flexDirection: "column",
  margin: "15px 0",
  width: "45%",
  minWidth: "200px",
};

const selectBoxStyle = {
  height: "36px",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #e4e7ea",
};
