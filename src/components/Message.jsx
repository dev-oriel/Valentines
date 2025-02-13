import React from "react";
import mermaid from "../assets/mermaid.jpg";
import vid from "../assets/mermaid.mp4";

const Message = () => {
  return (
    <div className="flex flex-col  items-center mt-28 pt-20 justify-center min-h-screen px-4 sm:px-6 text-center bg-primary py-16 sm:py-20">
      <h1 className="text-2xl sm:text-3xl mt-64 lg:text-6xl font-bold text-secondary bg-accent px-6 sm:px-10 py-3 sm:py-5 rounded-2xl shadow-2xl animate-bounce mb-4 sm:mb-8">
        Yay! I knew you would say yes 😂
      </h1>

      <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5 text-accent max-w-3xl leading-relaxed font-poppins bg-white p-3 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-8">
        Since our chemistry started working out, we have had the best parts of
        our days as well as our worst. We have been able to go through
        everything together, and I would love to have more of this. <br />
        To more amazing memories together baby🥂 ❤ ...Now, let’s celebrate you
        and me, forever.
      </p>

      <p className="text-base sm:text-lg text-secondary bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md mb-6 sm:mb-10">
        Meet tomorrow, 14th... You know the place.
      </p>

      <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
          <img
            src={mermaid}
            alt="Memory"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
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
