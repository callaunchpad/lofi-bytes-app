import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import File from "/src/media/test.mid";

const midi = await Midi.fromUrl(File)


const MidiSynth = () => {
    const [play, setPlay] = useState(false);
    const synth = new Tone.Synth().toDestination();
 
    const startMusic = () => {
    
    //get the tracks
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
        Tone.Transport.clear();
        Tone.Transport.stop();
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

export default MidiSynth;