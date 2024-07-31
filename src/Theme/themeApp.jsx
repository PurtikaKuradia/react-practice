import { useState } from "react";
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";
import { Wrapper } from "./wrapper";

export default function ThemeApp() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  const [language, setLanguage] = useState("english");

  console.log("color", theme);
  console.log("lan", language);
  return (
    <>
      <ThemeContext.Provider value={value}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Wrapper />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
