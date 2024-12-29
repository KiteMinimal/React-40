import React, { useState } from "react";
import Drums from "./Drums";

// Importing sound files statically
import boom from "./sounds/boom.wav"
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

const App = () => {
  const [sounds, setSounds] = useState([
    { name: "boom", sound: boom, key: "A" },
    { name: "clap", sound: clap, key: "S" },
    { name: "hihat", sound: hihat, key: "D" },
    { name: "kick", sound: kick, key: "F" },
    { name: "openhat", sound: openhat, key: "J" },
    { name: "ride", sound: ride, key: "K" },
    { name: "snare", sound: snare, key: "L" },
    { name: "tink", sound: tink, key: "G" },
    { name: "tom", sound: tom, key: "H" },
  ]);

  return (
    <div className="flex flex-col pt-[128px] items-center">
      <h1 className="text-5xl mb-10 font-bold"> Drum Kit</h1>
      <div className="flex">
      {sounds.map((elem) => (
        <Drums letter={elem.key} name={elem.name} sound={elem.sound} />
      ))}
      </div>
      
    </div>
  );
};

export default App;
