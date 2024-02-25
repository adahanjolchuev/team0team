import React from "react";
import "./Hero.css";
import TextField from "@mui/material/TextField";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <button
        style={{
          padding: "10px",
          border: "transparent",
          background: "blue",
          color: "white",
          borderRadius: "5px",
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Hero;
