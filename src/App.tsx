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
          controls={false}
          width="100%"
          height="100%"
          
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
