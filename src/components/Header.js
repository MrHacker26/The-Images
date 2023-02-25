import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container mx-auto my-9 border-b-2 pb-8 md:px-0 px-3">
      <div className="flex justify-between">
        <p className="text-3xl font-logo">The Images 📸</p>
        <div onClick={toggleTheme}>
          {theme === "dark" ? (
            <MdDarkMode size={25} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
