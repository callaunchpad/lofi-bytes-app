import imgSrc from "@/media/lofi3.gif";
import imgSrc2 from "@/media/lofi1.gif";
import lstm_rain from "./assets/lstm_final.mp3";
import lstm from "./assets/download.wav";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "LSTM Sample",
    artist: "LSTM",
    audioSrc: lstm,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "LSTM with Rain",
    artist: "LSTM",
    audioSrc: lstm_rain,
    image: imgSrc2,
    color: "#ffb77a"
  },
];