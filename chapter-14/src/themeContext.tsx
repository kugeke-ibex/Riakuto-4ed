import { createContext } from "react";

export const themeStyles = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

export type ThemeID = keyof typeof themeStyles;
type ValueOf<T> = T[keyof T];
type ThemeStyle = ValueOf<typeof themeStyles>;

export interface ThemeContext {
  themeID: ThemeID;
  themeStyle: ThemeStyle;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({} as never);
