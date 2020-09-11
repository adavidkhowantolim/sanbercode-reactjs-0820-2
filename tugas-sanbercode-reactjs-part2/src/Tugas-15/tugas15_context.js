import React, { useState, createContext} from "react";

export const NavContext = createContext();

export const NavProvider = props => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <NavContext.Provider value={[isLightTheme, setIsLightTheme]}>
      {props.children}
    </NavContext.Provider>
  );
};
