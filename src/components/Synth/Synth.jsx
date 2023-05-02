import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import Rain from "/src/media/rain.wav";
import Cafe from "/src/media/cafe.mp3";
import Fire from "/src/media/fire.mp3";
import File from "/src/media/finetuned.mid";
import "./styles.css";

const rainPlayer = new Tone.Player(Rain).toDestination();
const cafePlayer = new Tone.Player(Cafe).toDestination();
const firePlayer = new Tone.Player(Fire).toDestination();

rainPlayer.loop = true;
cafePlayer.loop = true;
firePlayer.loop = true;

const midi = await Midi.fromUrl(File);
const synths = [];



const Synth = () => {
  const [play, setPlay] = useState(false);
  const [rainVolume, setRainVolume] = useState(-100);
  const [cafeVolume, setCafeVolume] = useState(-100);
  const [fireVolume, setFireVolume] = useState(-100);

  rainPlayer.volume.value = rainVolume;
  cafePlayer.volume.value = cafeVolume;
  firePlayer.volume.value = fireVolume;
  

    const startMusic = () => {
      rainPlayer.start();
      cafePlayer.start();
      firePlayer.start();
      midi.tracks.forEach(track => {
        // const synth = new Tone.PolySynth(Tone.Synth, {
        //   envelope: {
        //     attack: 0.05,
        //     decay: 0.3,
        //     sustain: 0.4,
        //     release: 1.1,
        //   },
        // }).toDestination();
        const synth = new Tone.Sampler({
          urls: {
            B4: '/src/components/Synth/assets/piano_B4.wav',
            D4: '/src/components/Synth/assets/piano_D4.wav',
            C2: '/src/components/Synth/assets/piano_C2.wav',
            G2: '/src/components/Synth/assets/piano_G2.wav',
          },
        }).toDestination();
        const filter = new Tone.AutoFilter(4).start();
        const distortion = new Tone.Distortion(0.5);
        // connect the player to the filter, distortion and then to the master output
        synth.chain(filter, distortion, Tone.Destination);
        synths.push(synth);
        Tone.Transport.bpm.value = 120;
        new Tone.Part((time, event) => {
          synth.triggerAttackRelease(
            event.name,
            event.duration,
            time,
            event.velocity
          );
        }, track.notes).start(midi.startTime);
      });
      Tone.Transport.bpm.value = 40;
      Tone.Transport.start();
      Tone.Transport.loop = true;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = 30;
      setPlay(true);
    }
    const muteMusic = () => {
      rainPlayer.stop();
        cafePlayer.stop();
        firePlayer.stop();
        Tone.Transport.clear();
        Tone.Transport.stop();
        while (synths.length) {
          const synth = synths.shift();
          synth.disconnect();
        }
        setPlay(false);
    }

  return (
    <main>
      <section>
        <p>rain</p>
        <input
          type="range"
          min={-20}
          max={10}
          step={0.2}
          value={rainVolume}
          onChange={event => {
            setRainVolume(event.target.valueAsNumber)
          }}
        />
      </section>
      <section>
        <p>cafe</p>
        <input
          type="range"
          min={-20}
          max={20}
          step={0.2}
          value={cafeVolume}
          onChange={event => {
            setCafeVolume(event.target.valueAsNumber)
          }}
        />
      </section>
      <section>
        <p>fire</p>
        <input
          type="range"
          min={-20}
          max={20}
          step={0.2}
          value={fireVolume}
          onChange={event => {
            setFireVolume(event.target.valueAsNumber)
          }}
        />
      </section>
      <div>
      <button onClick={play===true ? muteMusic : startMusic}>
        {play ===true ? "stop" : "start"}
      </button>
    </div>
    </main>
  );


}

export default Synth;