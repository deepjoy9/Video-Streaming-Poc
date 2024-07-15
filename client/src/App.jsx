import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import videojs from "video.js";
import { useRef } from "react";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:3000/uploads/9b3ac2d6-36f9-4df1-ba8a-665714a79be1/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video Streaming App</h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
