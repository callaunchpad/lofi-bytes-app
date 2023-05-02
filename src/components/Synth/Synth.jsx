import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import Rain from "/src/media/rain.wav";
import Cafe from "/src/media/cafe.mp3";
import Fire from "/src/media/fire.mp3";
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import File from "/src/media/finetuned.mid";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles.css";

const rainPlayer = new Tone.Player(Rain).toDestination();
const cafePlayer = new Tone.Player(Cafe).toDestination();
const firePlayer = new Tone.Player(Fire).toDestination();

rainPlayer.loop = true;
cafePlayer.loop = true;
firePlayer.loop = true;

//const midi = await Midi.fromUrl(File);

const Synth = (props) => {
  const File = props.file;
  const midi = new Midi(File);
  //parseFile(File);

  const [play, setPlay] = useState(false);
  const [rainVolume, setRainVolume] = useState(-100);
  const [cafeVolume, setCafeVolume] = useState(-100);
  const [fireVolume, setFireVolume] = useState(-100);

  rainPlayer.volume.value = rainVolume;
  cafePlayer.volume.value = cafeVolume;
  firePlayer.volume.value = fireVolume;

  const synth = new Tone.Synth().toDestination();
  
    const startMusic = () => {
      rainPlayer.start();
      cafePlayer.start();
      firePlayer.start();
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
      rainPlayer.stop();
        cafePlayer.stop();
        firePlayer.stop();
        Tone.Transport.clear();
        Tone.Transport.stop();
        setPlay(false);
    }

  return (
    <main>
      <div className="rain">
        <input
          type="range"
          min={-10}
          max={20}
          step={0.2}
          value={rainVolume}
          onChange={event => {
            setRainVolume(event.target.valueAsNumber)
          }}
        />
        <div className="rainIcon">
          <ThunderstormTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
      </div>
      <div className="cafe">
        <input
          type="range"
          min={0}
          max={30}
          step={0.2}
          value={cafeVolume}
          onChange={event => {
            setCafeVolume(event.target.valueAsNumber)
          }}
        />
        <div className="cafeIcon">
          <LocalCafeTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
      </div>
      <div className="fire">
        <input
          type="range"
          min={-10}
          max={20}
          step={0.2}
          value={fireVolume}
          onChange={event => {
            setFireVolume(event.target.valueAsNumber)
          }}
        />
        <div className="fireIcon">
          <LocalFireDepartmentTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
      </div>
      <div>
      <Typography variant="body1" color="text.primary" align="center" style={{ fontSize: '60px'}}>
      <Button variant="contained"
      style={{ fontSize: '1.3rem'}}
        onClick={play===true ? muteMusic : startMusic}>
        {play===true ? "stop" : "start"}
      </Button>
      </Typography>
    </div>
    </main>
  );

}

export default Synth;
