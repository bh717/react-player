import React, { useEffect, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import AWS from "aws-sdk";

function App() {
  // const [source, setSource] = useState<any>();
  const [source, setSource] = useState("https://react-player-backend.herokuapp.com/api/annotate");
  const [playing, setPlaying] = useState(false);

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
      <video id="video" width="1280" height="720" controls>
        Your browser does not support the video tag.
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
