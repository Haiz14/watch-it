import React, { useState, useEffect } from "react";
import Peer from "peerjs";
import SetupStream from "./SetupStream";

export function Page() {
  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState(null);
  const [peer, setPeer] = useState(null);
  const [streamOn, setStreamOn] = useState(false);
  const [remotePeerId, setRemotePeerId] = useState("");

  useEffect(() => {
    if (stream) {
      const newPeer = new Peer();
      newPeer.on("open", (id) => {
        console.log("Peer ID:", id);
        setPeerId(id);
      });

      newPeer.on("call", (call) => {
        call.answer(stream);
      });

      setPeer(newPeer);
    }

    return () => {
      if (peer) {
        peer.destroy();
      }
    };
  }, [stream]);

  const handleStartStream = () => {
    setStreamOn(true);
  };

  const handleStopStream = () => {
    setStreamOn(false);
  };


  return (
    <>
      <p>Peer ID: {peerId}</p>
      <SetupStream setStream={setStream} streamOn={streamOn} />
      <button onClick={handleStartStream}>Start Stream</button>
      <button onClick={handleStopStream}>Stop Stream</button>
    </>
  );
}
