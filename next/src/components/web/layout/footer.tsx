import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-12 border-t border-gray-500 text-gray-400 text-sm flex items-center justify-center">
      © {new Date().getFullYear()} MYSIS - e-Commerce WEB
    </footer>
  );
};

export default Footer;
