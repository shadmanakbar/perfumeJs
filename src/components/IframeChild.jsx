import React, { useEffect, useState } from "react";

import { perfume } from "../Util.js"

export const IframeChild = () => {


  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessage = () => {
    window.parent.postMessage("Hello World!", "http://localhost:3000");
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      setRecievedMessage("Got this message from parent: " + e.data);
        this.perfume = perfume('Child Frame');
    });
  }, []);

  return (
    <div>
      <h2>Child iFrame</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      <p>{recievedMessage}</p>
    </div>
  );
};
