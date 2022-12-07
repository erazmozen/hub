import { createContext } from "react";
import icons from "../icons";

const IconsContext = createContext(null);

const IconsContextProvider = ({ children }) => {
  return (
    <IconsContext.Provider value={icons}>
      {children}
    </IconsContext.Provider>
  );
};

export { IconsContext, IconsContextProvider };
