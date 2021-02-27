import React from "react";
import background from "../images/background.png";

export default function WelcomeScreen(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="flex flex-col space-y-4 items-center h-screen w-screen m-0 justify-center justify-items-center container mx-auto"
    >
      <div className="flex flex-row text-white text-5xl">
        Welcome To Earth Explore!
      </div>
      <div className="flex flex-row text-white">Subtitle</div>
      <button
        onClick={() => props.moveNext()}
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Button
      </button>
    </div>
  );
}
