import './App.css';
import { useEffect, useRef, useState } from 'react';
import {User} from "./Components/User"
import {Mic,Cam,Exit} from "./Icons/Icons"


function App() {

  const [userData, setUserData] = useState({
    user: "Sundeep",
    room: "1234"
  })
  const [controls,setControls]=useState({audio:true,video:true})
  const userStream=useRef(null);
const videoRef=useRef(null);



function toggleMute() {
  const myTracks = userStream.current.getTracks();
const myAudio = myTracks.filter(track => track.kind === "audio")[0];
const val=!controls.audio===true
setControls({...controls,audio:val})
  myAudio.enabled = val;
  console.log(`Video ${myAudio.enabled ? 'unmuted' : 'muted'} track.kind`);
}
function toggleVideo() {
  const myTracks = userStream.current.getTracks();
const myvideo = myTracks.filter(track => track.kind === "video")[0];
const val=!controls.video===true

setControls({...controls,video:val})
myvideo.enabled = val;
  console.log(`Video track ${myvideo.enabled ? 'unmuted' : 'muted'} track.kind`);
}

  useEffect(()=>{

    navigator.getUserMedia_ = (   navigator.getUserMedia
      || navigator.webkitGetUserMedia 
      || navigator.mozGetUserMedia 
      || navigator.msGetUserMedia);



if (navigator.getUserMedia_) {
  navigator.getUserMedia_(
    { audio: true, video: true },
    (stream) => {
      userStream.current=stream
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = (e) => {
        videoRef.current.play();
      };
    },
    (err) => {
      console.error(`The following error occurred: ${err.name}`);
    },
  );
} else {
  console.log("getUserMedia not supported");
}
  },[])

  return (
    <div className="app">
      <User setData={setUserData} data={userData} />
      {
        userData.user?
        <div>
          <div className='videogrp' >
              <div className='videowrap'style={{width:300,height:200}} >
                  <video ref={videoRef} width={300} height={200}  />
                  <label>You</label>
              </div>
          </div>
          <div className='Controls' >
            <div  className={`icon ${controls.audio?"":"disabled"}`} onClick={()=>toggleMute()} >
              <span className={`iconspan ${controls.audio?"":"disabled"}`}></span>
              <Mic />
              </div>
            <div className={`icon ${controls.video?"":"disabled"}` } onClick={()=>toggleVideo()} ><span className={`iconspan `}></span><Cam/></div>
            <div className='icon'><Exit/></div>
          </div>
        </div>
        :""  
      }
    </div>
  );
}






export default App;
