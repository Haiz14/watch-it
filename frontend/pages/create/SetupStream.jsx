/*
 * receives prop, streamOn: bool, which starts and stops stream
 */
import React, { useEffect, useRef } from "react";

export default function SetupStream({ setStream, streamOn }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (streamOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          videoRef.current.srcObject = stream;
        })
        .catch((error) => console.error(error));
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setStream(null);
      }
    }
  }, [setStream, streamOn]);

  return <video ref={videoRef} autoPlay muted />;
}

