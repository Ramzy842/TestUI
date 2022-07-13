import React, { useEffect, useState } from "react";

const Input = ({ inputXP, setInputXP, handleSubmit }) => {
  const [barFilling, setBarFilling] = useState(null);
  useEffect(() => {
    if (barFilling) {
      setTimeout(() => {
        setBarFilling(false);
      }, 3000);
    }
  }, [barFilling]);

  return (
    <div className="h-screen bg-main flex justify-center items-center flex-col">
      <h1 className="text-white mb-6 font-bold text-2xl md:text-3xl">
        Enter Experience Points:
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          onChange={(e) => setInputXP(e.target.value)}
          type="number"
          required
          className="mb-6 outline-none text-xl pl-2 py-2 rounded-lg focus:border-2 transition border-blue-500 bg-slate-700 text-white text-center"
          value={inputXP}
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-8 py-1 rounded-md hover:bg-blue-700 text-lg transition"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Input;
