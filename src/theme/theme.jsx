import React, { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import light from "./light";

export const ThemeType = {
  light: "light",
};

const themes = {
  [ThemeType.light]: light,
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(ThemeType.light);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
