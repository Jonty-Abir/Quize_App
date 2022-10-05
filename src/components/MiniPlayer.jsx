import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Classes from "./styles/MiniBar.module.css";

export default function MiniPlayer({ url, title }) {
  const [state, setState] = useState(false);
  const buttonRef = useRef(null);
  const videoUrl = `https://www.youtube.com/watch?v=${url}`;
  function toggleMiniPlayer() {
    if (!state) {
      buttonRef.current.classList.remove(Classes.floatingBtn);
      setState(true);
    } else {
      buttonRef.current.classList.add(Classes.floatingBtn);
      setState(false);
    }
  }
  return (
    <div
      className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${Classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${Classes.close}`}>
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={Classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={state}
        controls
      ></ReactPlayer>
      <p>{title}</p>
    </div>
  );
}
