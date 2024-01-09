import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const GlobalTheme = ({ children }) => {
   const [theme, setTheme] = useState("");
   const [colorTheme, setColorTheme] = useState("");
   const [backgroundColorTheme, setBackgroundColorTheme] = useState("");

   useEffect(() => {
       const handleThemeChange = (event) => {
           const updatedTheme = event.matches ? 'dark' : 'light';
           setTheme(updatedTheme);
           localStorage.setItem("theme", updatedTheme);
       };

       if (localStorage.getItem("theme") === null) {
           window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
           const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
           setTheme(currentTheme);
       } else {
           setTheme(localStorage.getItem("theme"));
       }

       return () => {
           window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
       };
   }, []);

   useEffect(() => {
       if (theme === 'dark') {
           setBackgroundColorTheme("#202124");
           setColorTheme("#fffefeff")
       } else {
           setBackgroundColorTheme("#fffefeff");
           setColorTheme("#030303")
       }
       document.documentElement.style.backgroundColor = backgroundColorTheme;
       document.documentElement.style.color = colorTheme;
   }, [theme, colorTheme, backgroundColorTheme]);

   return (
       <ThemeContext.Provider value={{ theme, setTheme, colorTheme, backgroundColorTheme }} >
           {children}
       </ThemeContext.Provider>
   )
}

export default GlobalTheme;
