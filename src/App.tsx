import React, { useEffect, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  const [source, setSource] = useState(
    "https://react-player-backend.herokuapp.com/works-in-chrome-and-safari"
    // "http://localhost:3000/works-in-chrome-and-safari"
  );
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      <ReactPlayer
        playsinline={true}
        url={[{ src: source, type: "video/mp4;" }]} // video location
        controls // gives the front end video controls
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        muted={true}
        loop={true}
        allowFullScreen
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
