import React, { useState } from "react";
import Message from "./components/Message.jsx";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    const newX = Math.random() * 70 + 15 + "%";
    const newY = Math.random() * 70 + 15 + "%";
    setNoPosition({ top: newY, left: newX });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      {!accepted ? (
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-red-600 mb-8 drop-shadow-lg">
            Hello, Mermaid! 🧜‍♀️ <br />
            Will you be my Valentine? ❤
          </h1>
          <div className="relative flex justify-center items-center w-full h-40">
            <button
              onClick={() => setAccepted(true)}
              className="px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-xl transition-transform hover:scale-110 hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
              }}
              className="px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <Message />
      )}
    </div>
  );
};

export default App;
