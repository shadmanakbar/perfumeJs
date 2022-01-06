import React, { useRef, useEffect, useState } from "react";
import { perfume } from "../Util.js";

export const IframeParent = () => {
  const iFrameRef = useRef(null);
  const [recievedMessage, setRecievedMessage] = useState("");


  const sendMessage = () => {

    if (!iFrameRef.current) return;

    iFrameRef.current.contentWindow.postMessage(
      "Hello World!",
      "http://localhost:3000"
    );
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      setRecievedMessage("Got this message from child: " + e.data);
      this.perfume = perfume()
    });


  }, []);

  return (
    <div>
      <h1>Parent iFrame</h1>
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send message to child
      </button>

      <br />
      <br />

      <iframe
        ref={iFrameRef}
        src="/iframe-child/"
        width="600"
        height="300"
        title="Child iframe"
      ></iframe>

      <p>{recievedMessage}</p>
    </div>
  );
};
