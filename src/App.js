import React from "react";
import Container from "./components/Container";

function App() {
  return (
    <div className="App" style={mainStyle}>
      <Container />
    </div>
  );
}

export default App;

////////// STYLING //////////

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  background: "#EAEEF6",
};
