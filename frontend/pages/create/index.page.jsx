/** 
  add Button start-stream and stop-stream
*/
import React, { useState, useEffect, useRef } from "react";
import SetupStream from "./SetupStream";

export function Page() {
  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState(null);
  const [streamOn, setStreamOn] = useState(false);

  const handleStartStream = () => {
    setStreamOn(true);
  };

  const handleStopStream = () => {
    setStreamOn(false);
  };

  return (
    <>
      <SetupStream setStream={setStream} streamOn={streamOn} />
      <button onClick={handleStartStream}>Start Stream</button>
      <button onClick={handleStopStream}>Stop Stream</button>
    </>
  );
}

