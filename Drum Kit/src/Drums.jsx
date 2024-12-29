import React from "react";

const Drums = ({ sound, letter }) => {
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="bg-pink-800 text-white cursor-pointer w-[100px] h-[100px] text-5xl font-emibold rounded flex items-center justify-center m-5">
      <buttom className="" onClick={playSound}>{letter}</buttom>
    </div>
  );
};

export default Drums;
