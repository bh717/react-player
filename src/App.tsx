import React, { useEffect, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
// import AWS from "aws-sdk";

function App() {
  // const [source, setSource] = useState<any>();
  const [source, setSource] = useState("https://react-player-backend.herokuapp.com/api/annotate");
  // const [playing, setPlaying] = useState(false);

  // useEffect(() => {
  //   const endpointUrl = "api/annotate";
  //   fetch(`${process.env.BASE_API_URL}/${endpointUrl}`, {
  //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //   }).then((res) => {
  //     console.log(res);
  //     setSource(res);
  //   });
  // }, []);

  // return (
  //   <div className="App">
  //     <ReactPlayer
  //       playing={true}
  //       url={source} // video location
  //       controls // gives the front end video controls
  //       width="100%"
  //       height="100%"
  //     />
  //   </div>
  // );

  return (
    <div> 
      <video width="100%" height="100%" autoPlay loop muted playsInline>
        Your browser does not support the video tag.
        <source src="https://elasticbeanstalk-us-east-2-045749248414.s3.amazonaws.com/1665446699465" type="video/mp4" />
      </video>
    </div>

  );
}

export default App;
