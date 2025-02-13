import React, { useState } from "react";
import Message from "./components/Message.jsx";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    const newX = Math.random() * 50 + 20 + "%"; // Keeps it within 20-70% range
    const newY = Math.random() * 50 + 20 + "%"; // Prevents it from going too high/low
    setNoPosition({ top: newY, left: newX });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary px-4 sm:px-8">
      {!accepted ? (
        <div className="text-center w-full max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 mb-6 sm:mb-10 drop-shadow-lg animate-pulse">
            Hello, Mermaid! 🧜‍♀️ <br />
            Will you be my Valentine? ❤
          </h1>
          <div className="relative flex justify-center items-center w-full h-40">
            <button
              onClick={() => setAccepted(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-bold text-lg sm:text-xl rounded-full shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onMouseEnter={moveNoButton} // For desktop
              onTouchStart={moveNoButton} // For mobile
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white font-bold text-lg sm:text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-90"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20 sm:mt-32 w-full">
          <Message />
        </div>
      )}
    </div>
  );
};

export default App;
