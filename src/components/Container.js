import React, { useState, useEffect } from "react";
import Logo from "../assets/widya.png";
import Input from "./Input";
import Select from "./Select";
import axios from "axios";

const Container = () => {
  const data = {}; // data input
  const [optionsBidang, setOptionsBidang] = useState([]);

  useEffect(() => {
    axios
      .get("https://widyaskilloka.com/api/v1/master/company-types")
      .then((res) => {
        setOptionsBidang(res.data.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        <img src={Logo} alt="logo" style={logoStyle} />
      </div>

      <h3 style={headingStyle}>Data Perusahaan</h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={rowStyle}>
          <Input 
            label="Nama Perusahaan" 
            name="nama" 
            type="text" 
            data={data} />
          <Input
            label="Website Perusahaan"
            name="website"
            type="text"
            data={data}
          />
        </div>
        <div style={rowStyle}>
          <Input
            label="Nomor Telepon Perusahaan"
            name="noTelp"
            type="number"
            data={data}
          />
          <Select
            label="Bidang Perusahaan"
            name="bidang"
            options={optionsBidang}
            data={data}
          />
        </div>

        <h3 style={headingStyle}>Data Diri Anda</h3>
        <div style={rowStyle}>
          <Input
            label="Nama Lengkap"
            name="namaLengkap"
            type="text"
            data={data}
          />
          <Input
            label="Nama Panggilan"
            name="namaPanggilan"
            type="text"
            data={data}
          />
        </div>
        <div style={rowStyle}>
          <Input 
            label="Email" 
            name="email" 
            type="email" 
            data={data} />
          <Input 
            label="Telepon" 
            name="telp" 
            type="number" 
            data={data} />
        </div>
        <button style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

export default Container;

////////// STYLE //////////

const logoStyle = {
  width: "200px",
  height: "40px",
  margin: "20px 0 0 0",
};

const logoContainerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const containerStyle = {
  margin: "10px 0 0 0",
  width: "80%",
  maxWidth: "690px",
  borderRadius: "20px",
  background: "white",
  display: "flex",
  flexDirection: "column",
};

const formStyle = {
  width: "100%",
};

const rowStyle = {
  display: "flex",
  width: "80%",
  margin: "0 10% 0 10%",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

const headingStyle = {
  margin: "40px 0 0 10%",
  color: "#23282c",
  left: "10%",
};

const buttonStyle = {
  background: "#335877",
  width: "80%",
  height: "44px",
  fontSize: "14px",
  margin: "30px 10%",
  border: "none",
  color: "white",
};
