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
    <div>
      {local === "en" ? <h1>English</h1> : <h1>Espanol</h1>}
      <h2>{translte("greeting")}</h2>
      <h2>{translte("welcome")}</h2>
      <button onClick={() => handleLocalchage("en")}>English</button>
      <button onClick={() => handleLocalchage("es")}>Espanol</button>
    </div>
  );
};

export default LocalizationSystem;
