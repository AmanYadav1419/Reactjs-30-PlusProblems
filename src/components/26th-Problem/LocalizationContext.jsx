import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({ children }) {
  const [local, setLocal] = useState("en");

  const localizaedString = {
    // english
    en: {
      greeting: "Hello World!",
      welcome: "Welcome to my app.",
    },
    // spanish
    es: {
      greeting: "Hola mundo!",
      welcome: "Bienvenido a mi aplication",
    },
  };

  const translte = (key) => {
    return localizaedString[local][key];
  };

  return (
    <LocalizationContext.Provider value={{ local, setLocal, translte }}>
      {children}
    </LocalizationContext.Provider>
  );
}
