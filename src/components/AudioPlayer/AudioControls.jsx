import React from "react";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";

const AudioControls = ({
  isPlaying,
<<<<<<< HEAD
  onPlayPauseClick
}) => (
  <div className="audio-controls">
=======
  onPlayPauseClick,
  // onPrevClick,
  // onNextClick
}) => (
  <div className="audio-controls">
    {/* <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button> */}
>>>>>>> ad4c7104e191db3cdf977c93f459effceeedb340
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
<<<<<<< HEAD
=======
    {/* <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button> */}
>>>>>>> ad4c7104e191db3cdf977c93f459effceeedb340
  </div>
);

export default AudioControls;
