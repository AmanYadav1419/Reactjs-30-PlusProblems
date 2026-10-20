// question :- create a localization system using useContext to provide translations for the entire app

import React from "react";
import { useLocalization } from "./LocalizationContext";

const LocalizationSystem = () => {
  const { local, setLocal, translte } = useLocalization();
  // console.log(local);
  const handleLocalchage = (newLocal) => {
    setLocal(newLocal);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Localization System</h2>

        {/* Language switcher */}
        <div className="flex gap-2 p-1 bg-[#18181c] rounded-xl border border-white/5">
          <button
            onClick={() => handleLocalchage("en")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${local === 'en' ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => handleLocalchage("es")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${local === 'es' ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            🇪🇸 Español
          </button>
        </div>

        {/* Translated output */}
        <div className="bg-[#18181c] border border-white/5 rounded-xl p-5 flex flex-col gap-3">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Translation Output</p>
          <p className="text-xl font-bold text-white">{translte("greeting")}</p>
          <p className="text-base text-zinc-300">{translte("welcome")}</p>
        </div>
      </div>
    </div>
  );
};

export default LocalizationSystem;
