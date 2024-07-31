import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

export const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  console.log("==> theme", theme);
  console.log("==> lan", language);

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <button
        onClick={() =>
          setLanguage(language === "english" ? "hindi" : "english")
        }
      >
        {language == "english" ? "Hindi" : "English"}
      </button>
    </>
  );
};
