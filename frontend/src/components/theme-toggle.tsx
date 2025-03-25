import React from "react";

const ThemeToggle: React.FC = () => {
  const toggleTheme = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  };
  return (
    <button onClick={toggleTheme} className="bg-gray-700 text-white px-4 py-2 rounded">
      Tema Değiştir
    </button>
  );
};

export default ThemeToggle;
