import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="App">
      <ReactPlayer autoPlay  url='https://elasticbeanstalk-us-east-2-045749248414.s3.amazonaws.com/1665446656772' />  
    </div>
  );
}

export default App;
