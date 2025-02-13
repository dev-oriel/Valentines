import React from "react";
import mermaid from "../assets/mermaid.jpg";
import vid from "../assets/mermaid.mp4";

const Message = () => {
  return (
    <div className="flex flex-col mt-24 items-center justify-center min-h-screen px-6 text-center bg-primary">
      <h1 className="text-5xl font-bold text-secondary bg-accent px-8 py-4 rounded-2xl shadow-2xl animate-bounce">
        Yay! I knew you would say yes 😂
      </h1>
      <p className="text-2xl mt-6 text-accent max-w-2xl leading-relaxed font-poppins bg-white p-4 rounded-lg shadow-md">
        since our chemistry started working out, we have had the best parts of
        our days as well as our worst. We have been able to go through
        everything together, and I would love to have more of this. <br />
        To more amazing memories together, baby🥂 ❤ ...Now, let’s celebrate you
        and me, forever.
      </p>
      <p className="mt-4 text-lg font-semibold text-secondary bg-white px-6 py-3 rounded-lg shadow-md">
        Meet tomorrow, 14th... You know the place.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="w-64 h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
          <img
            src={mermaid}
            alt="Memory"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-64 h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Message;
