import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Index = () => {
  const [typeOfColor, setTypeOfColor] = useState("#hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
  }
  useEffect(()=>{
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor() 
  },[typeOfColor])

  function handleCreateRandomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        background: color,
      }}
      className="container"
    >
      <div>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Ramdom Color
      </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          color: "#fff",
          fontSize: "60px",
        }}
      ></div>
      <h3 className="h3">{typeOfColor === 'rgb' ? '( RGB COLOR )' : '( HEX COLOR ) '}</h3>
      <h1>{color}</h1>
    </div>
  );
};

export default Index;
