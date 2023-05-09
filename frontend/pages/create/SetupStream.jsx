/**
 * SetupStream component
 * receive setStream props
 * get video stream via navigator.mediaDevices.getUserMedia
 * set Stream to video element
*/

import React, { useEffect, useRef } from "react";

export default function SetupStream({ setStream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        videoRef.current.srcObject = stream;
      })
      .catch((error) => console.error(error));
  }, [setStream]);

  return <video ref={videoRef} autoPlay muted />;
};



