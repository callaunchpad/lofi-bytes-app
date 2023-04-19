import { ReactComponent as Play } from "../AudioPlayer/assets/play.svg";
import { ReactComponent as Pause } from "../AudioPlayer/assets/pause.svg";

const SynthControls = ({
  isPlaying,
  onPlayPauseClick,
}) => (
  <div className="audio-controls">
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
  </div>
);

export default SynthControls;
