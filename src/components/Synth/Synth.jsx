import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import Rain from "/src/media/rain.wav";
import Cafe from "/src/media/cafe.mp3";
import Fire from "/src/media/fire.mp3";
import Drum from "/src/media/drum.wav";
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import GraphicEqTwoToneIcon from '@mui/icons-material/GraphicEqTwoTone';
import File from "/src/media/finetuned.mid";
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import "./styles.css";

const rainPlayer = new Tone.Player(Rain).toDestination();
const cafePlayer = new Tone.Player(Cafe).toDestination();
const firePlayer = new Tone.Player(Fire).toDestination();
const drumPlayer = new Tone.Player(Drum).toDestination();

rainPlayer.loop = true;
cafePlayer.loop = true;
firePlayer.loop = true;
drumPlayer.loop = true;

const Synth = (props) => {
  const File = props.file;
  const midi = new Midi(File);
  const synths = [];

  const [play, setPlay] = useState(false);
  const [rainVolume, setRainVolume] = useState(-100);
  const [cafeVolume, setCafeVolume] = useState(-100);
  const [fireVolume, setFireVolume] = useState(-100);
  const [drumVolume, setDrumVolume] = useState(-100);

  rainPlayer.volume.value = rainVolume;
  cafePlayer.volume.value = cafeVolume;
  firePlayer.volume.value = fireVolume;
  drumPlayer.volume.value = drumVolume;
  

    const startMusic = () => {
      drumPlayer.start();
      rainPlayer.start();
      cafePlayer.start();
      firePlayer.start();
      midi.tracks.forEach(track => {
        const synth = new Tone.Sampler({
          urls: {
            A2: '/src/components/Synth/assets/client_assets_samples_instruments_piano-soft_A2.mp3',
            A5: '/src/components/Synth/assets/client_assets_samples_instruments_piano-soft_A5.mp3',
            C4: '/src/components/Synth/assets/client_assets_samples_instruments_piano-soft_C4.mp3',
            C7: '/src/components/Synth/assets/client_assets_samples_instruments_piano-soft_C7.mp3',
          },
        }).toDestination();
        const filter = new Tone.AutoFilter(4).start();
        const reverb = new Tone.Reverb(1);
        //const distortion = new Tone.Distortion(0.5);
        // connect the player to the filter, distortion and then to the master output
        synth.chain(filter, reverb, Tone.Destination);
        synth.volume.value = 10;
        synths.push(synth);
        Tone.Transport.bpm.value = 120;
        new Tone.Part((time, event) => {
          synth.triggerAttackRelease(
            event.name,
            event.duration + 0.75,
            time,
            event.velocity
          );
        }, track.notes).start(midi.startTime);
      });
      Tone.Transport.bpm.value = 60;
      Tone.Transport.start();
      Tone.Transport.loop = true;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = 30;
      setPlay(true);
    }
    const muteMusic = () => {
        drumPlayer.stop();
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
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className="drum">
        <div className="drumIcon">
          <GraphicEqTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
        <Slider
          type="range"
          min={-50}
          max={20}
          step={0.2}
          value={drumVolume}
          onChange={(event, newValue) => {
            setDrumVolume(newValue)
          }}
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className="rain">
        <div className="rainIcon">
          <ThunderstormTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
        <Slider
          type="range"
          min={-20}
          max={15}
          step={0.2}
          value={rainVolume}
          onChange={(event, newValue) => {
            setRainVolume(newValue)
          }}
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className="cafe">
        <div className="cafeIcon">
          <LocalCafeTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
        <Slider
          min={0}
          max={30}
          step={0.2}
          value={cafeVolume}
          onChange={(event, newValue) => {
            setCafeVolume(newValue)
          }}
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className="fire">
        <div className="fireIcon">
          <LocalFireDepartmentTwoToneIcon sx={{ color: "white", padding: "10px", backgroundColor: "#8e5dde", fontSize: "50px", borderRadius: "10px", }}/>
        </div>
        <Slider
          type="range"
          min={-10}
          max={20}
          step={0.2}
          value={fireVolume}
          onChange={(event, newValue) => {
            setFireVolume(newValue)
          }}
          color="secondary"
        />
      </Stack>
      <div>
      {props.generating ?
      <Typography variant="body1" color="white" align="center" style={{ fontSize: '20px'}}>
        {props.generating}
      </Typography> 
        : 
      <></>
      }
      {File!==null && !props.generating ? 
      <Typography variant="body1" color="text.primary" align="center" style={{ fontSize: '40px'}}>
        <Button variant="contained"
          style={{ fontSize: '1.3rem'}}
          onClick={play===true ? muteMusic : startMusic}>
          {play===true ? "stop" : "start"}
        </Button>
      </Typography> 
        : 
      <></>}
      
    </div>
    </main>
  );

}

export default Synth;
