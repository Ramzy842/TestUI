import React, { useEffect, useState } from "react";
import low from "../assets/low.svg";
import high from "../assets/high.svg";

import "animate.css";
const Levelup = ({
  stats,
  remainingXP,
  leveledUp,
  progress,
  setProgress,
  setBarFilling,
}) => {
    const [showLevel, setShowLevel] = useState(false)
  useEffect(() => {
    setProgress((remainingXP * 100) / stats.requiredXP);
    if (progress === 100) {
      setBarFilling(false);
    }
  }, [stats, remainingXP, progress, setBarFilling, setProgress]);

  useEffect(() => {
    if (leveledUp) {
        setTimeout(() => {
            setShowLevel(true)
        }, 1000)
    }
  }, [leveledUp])

  return (
    <div className=" bg-main overflow-hidden">
      <div
        className={`${
          leveledUp && "bg-burst"
        } h-screen bg-no-repeat bg-cover bg-center `}
      >
        <div className="flex flex-col items-center justify-center p-4">
          <img
            src={low}
            alt="low-badge"
            className={`${
              leveledUp
                ? "animate__animated animate__zoomOut scale-30 blur-lg brightness-300 hidden"
                : "flex "
            } z-40 mb-8 transition  cursor-pointer  `}
          />

          <img
            src={high}
            alt="high-badge"
            className={`transition animate__animated animate__zoomIn   cursor-pointer ${
              leveledUp ? "flex" : "hidden"
            } `}
          />
          {showLevel && (
            <h1 className="z-40 text-white text-6xl bg-clip-text text-transparent bg-gradient-to-t from-orange-400 to-yellow-300 position mb-12 font-bold animate__animated animate__zoomIn">
              LEVEL : {stats.level}
            </h1>
          )}
          <div className="relative w-1/2  h-5 ">
            <div className="absolute top-0 right-0 left-0 bottom-0 opacity-20 bg-white h-5 rounded-full "></div>
            <div
              className={`absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-blue1 to-blue2 h-5 rounded-full w-full max-w-full transition-all ease-out duration-1000`}
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className={`absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-blue1 to-blue2 h-5 rounded-full blur-md w-full  max-w-full transition-all ease-out duration-1000`}
              style={{ width: `${progress}%` }}
            ></div>

            <h1 className=" text-white absolute  right-0 -top-8 bottom-0 font-bold  ">
              {remainingXP}/{stats.requiredXP}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levelup;
