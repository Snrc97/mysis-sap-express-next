import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-12 bg-gray-800 text-gray-400 text-sm flex items-center justify-center">
      © {new Date().getFullYear()} My Dashboard
    </footer>
  );
};

export default Footer;
