import React, { useRef, useState } from "react";
import { use } from "react";

const BgcolorChange = () => {
  
  const colorPickerOn = useRef();
  const [backGroundColor, setbBackGroundColor] = useState("");

  const handlerColor = () => {
    colorPickerOn.current.click();
  };

  const bgColorChange = (event) => {
    setbBackGroundColor(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="box" onClick={handlerColor}></div>

        <input
          ref={colorPickerOn}
          onChange={bgColorChange}
          type="color"
          style={{
            display: "none",
            position: "absolute",
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: backGroundColor,
          width: "100%",
          height: "100vh",
        }}
        className="colorDiv"
      ></div>
    </div>
  );
};

export default BgcolorChange;
