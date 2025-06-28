import { useContext } from "react";
import { ThemeContext } from "../context/Themeprovider";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full">
      {darkMode ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
