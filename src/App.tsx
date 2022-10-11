import React, { useEffect, useState } from "react";
import "./App.css";
import { Stream } from "@cloudflare/stream-react";

function App() {
  // const [source, setSource] = useState("");
  // const [playing, setPlaying] = useState(false);

  // useEffect(() => {
  //   fetch("/api/annotate", {
  //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //   }).then((res) => {
  //     setSource(String(res));
  //   })
  // });
  // return (
  //   <div className="App">
  //     <ReactPlayer
  //       // onProgress={onProgress}
  //       playsinline={true}
  //       url={[{ src: source, type: "video/mp4;" }]} // video location
  //       controls // gives the front end video controls
  //       width="100%"
  //       className="react-player"
  //       height="100%"
  //       allow="autoplay; encrypted-media"
  //       allowFullScreen
  //       // muted={true}
  //       playing={playing}
  //       onPlay={() => setPlaying(true)}
  //       // onPause={() => setPlaying(false)} //part of the attempt to fix
  //       // onSeek={(seek) => playerSeeker(seek)} //part of the attempt to fix
  //       config={{
  //         file: {
  //           attributes: {
  //             controlsList: "nodownload",
  //           },
  //         },
  //       }}
  //       onContextMenu={(e: any) => e.preventDefault()}
  //     />
  //   </div>
  // );
  const videoIdOrSignedUrl = "https://elasticbeanstalk-us-east-2-045749248414.s3.amazonaws.com/1665446699465";
  return (
    <div>
      <Stream controls src={videoIdOrSignedUrl} />
    </div>
  );
}

export default App;
