import React, { useEffect, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
// import AWS from "aws-sdk";

function App() {
  // const [source, setSource] = useState<any>();
  const [source, setSource] = useState("https://react-player-backend.herokuapp.com/api/annotate");
  const [loaded, setLoaded] = useState(false);
  // const [playing, setPlaying] = useState(false);

  return (
    <div className="App">
      <ReactPlayer
          url={source}
          muted={true}
          playing={true}
          controls={false}
          loop={true}
          width="100%"
          height="100%"
          playsinline={true}
          onStart={() => setLoaded(true)}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                autoplay: 0,
                color: "white",
                enablejsapi: 1,
                disablekb: 1,
                wmode: "transparent",
                modestbranding: 1,
                iv_load_policy: 3,
              },
            },
          }}
        />

    </div>
  );

  // return (
  //   <div> 
  //     <video width="100%" height="100%" autoPlay loop muted playsInline>
  //       Your browser does not support the video tag.
  //       {/* <source src="https://elasticbeanstalk-us-east-2-045749248414.s3.amazonaws.com/1665446699465" type="video/mp4" /> */}
  //       {/* <source src="./Firstview_high.mp4" type="video/mp4" /> */}
  //       <source src={source} type="video/mp4" />
  //     </video>
  //   </div>
  // );
}

export default App;
