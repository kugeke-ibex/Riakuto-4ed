import * as React from "react";
import { useState } from "react";
import type { FC, PropsWithChildren } from "react";
import { ThemeContext, themeStyles } from "./themeContext";
import type { ThemeID } from "./themeContext";

type Props = {
  initialThemeID: ThemeID;
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const initialThemeID = "light";
  const [themeID, setThemeID] = useState<ThemeID>(initialThemeID);
  const style = themeStyles[themeID];

  const toggleTheme = () => {
    const themeIDs = Object.keys(themeStyles)
    const newID = themeIDs.find((id) => id !== themeID);
    if (newID) {
      setThemeID(newID as ThemeID);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeID,
        themeStyle: themeStyles[themeID],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
