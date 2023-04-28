import React, { useState } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import Rain from "/src/components/Synth/rain.wav";
import File from "/src/components/Synth/test.mid";
import "./styles.css";

const player = new Tone.Player(Rain).toDestination();
player.volume.value = -10;
const midi = await Midi.fromUrl(File)

const Synth = () => {
  const [play, setPlay] = useState(false);
  const synth = new Tone.Synth().toDestination();
  
 
    const startMusic = () => {
      player.start();
      midi.tracks.forEach(track => {
        new Tone.Part((time, event) => {
          synth.triggerAttackRelease(
            event.name,
            event.duration,
            time,
            event.velocity
          );
        }, track.notes).start(midi.startTime);
      });
      
      Tone.Transport.start();
      setPlay(true);
    }
    const muteMusic = () => {
        player.stop();
        Tone.Transport.pause();
        Tone.Transport.clear();
        setPlay(false);
    }

  return (
    <div>
      <button onClick={play===true ? muteMusic : startMusic}>
        {play ===true ? "stop" : "start"}
      </button>
    </div>
  );


}

export default Synth;