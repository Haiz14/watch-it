import React, { useEffect, useRef, useState } from 'react';

export { Page };

function Page() {
  const [peer, setPeer] = useState(null);
  const [peerId, setPeerId] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [conn, setConn] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [call, setCall] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const localVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    const init = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      localVideo.current.srcObject = stream;

      const { default: Peer } = await import('peerjs');
      const peer = new Peer({ debug: 2 });
      setPeer(peer);

      peer.on('open', (id) => {
        setPeerId(id);
      });

      peer.on('call', (incomingCall) => {
        incomingCall.answer(stream);
        setCall(incomingCall);
        incomingCall.on('stream', (remoteStream) => {
          remoteVideo.current.srcObject = remoteStream;
        });
      });

      peer.on('connection', (dataConnection) => {
        setConn(dataConnection);
        dataConnection.on('data', (data) => {
          console.log('Received:', data);
        });
      });
    };

    init();
  }, []);

  const startConnection = () => {
    const outgoingCall = peer.call(remotePeerId, localStream);
    setCall(outgoingCall);
    outgoingCall.on('stream', (remoteStream) => {
      remoteVideo.current.srcObject = remoteStream;
    });

    const dataConnection = peer.connect(remotePeerId);
    setConn(dataConnection);
  };

  const endConnection = () => {
    if (call) {
      call.close();
      setCall(null);
    }

    if (conn) {
      conn.close();
      setConn(null);
    }

    remoteVideo.current.srcObject = null;
  };

  const toggleMute = () => {
    if (localStream) {
      remoteVideo.current.srcObject.getAudioTracks()[0].enabled = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const viewLink = `/view/?peerId=${peerId}`;

  return (
    <div>
      <h4>Serverless WebRTC</h4>
      <p>Your ID: {peerId}</p>
      <a href={viewLink}>Go to View Page</a>
      <input 
        type="text" 
        value={remotePeerId}
        onChange={(e) => setRemotePeerId(e.target.value)}
        placeholder="Remote ID"
      />
      <button onClick={startConnection}>Start Connection</button>
      <button onClick={endConnection}>End Connection</button>
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <div>
        <video ref={localVideo} autoPlay muted style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}></video>
        <video ref={remoteVideo} autoPlay style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}></video>
      </div>
    </div>
  );
};

