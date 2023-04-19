import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import AudioControls from "./SynthControls";
import Rain from "@/media/rain.wav";
import "./styles.css";

const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();

const Synth = () => {
  const [play, setPlay] = useState(false);
  
 
    const startMusic = () => {
            player.start();
            setPlay(true);
        
    }
    const muteMusic = () => {
        player.stop();
        setPlay(false);
    }

  return (
    <div>
      <button onClick={play===true ? muteMusic : startMusic}>
        {play ===true ? "stop" : "start"}
        start
      </button>
    </div>
  );


}

export default Synth;