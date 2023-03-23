import imgSrc from "@/media/lofi3.gif";
import imgSrc2 from "@/media/lofi1.gif";
import classical1 from "./assets/model_alicia_400_classical-27.mp3";
import mario1 from "./assets/model_alicia_400_generated-mario.mp3";
import classical2 from "./assets/model_zane_classical.mp3";
import mario2 from "./assets/model_zane_mario.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "Music Transformer 1",
    artist: "alicia - classical",
    audioSrc: classical1,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "Music Transformer 2",
    artist: "alicia - mario",
    audioSrc: mario1,
    image: imgSrc2,
    color: "#ffb77a"
  },
  {
    title: "Music Transformer 3",
    artist: "zane - classical",
    audioSrc: classical2,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "Music Transformer 4",
    artist: "zane - mario",
    audioSrc: mario2,
    image: imgSrc2,
    color: "#ffb77a"
  },
];