import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const GlobalTheme = ({ children }) => {
    const [theme, setTheme] = useState("");
    const [colorTheme, setColorTheme] = useState("");
    const [backgroundColorTheme, setBackgroundColorTheme] = useState("");

    useEffect(() => {
        const handleThemeChange = (event) => {
            const updatedTheme = event.matches ? 'dark' : 'light';
            setTheme(updatedTheme);
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

    useEffect(()=>{
        if (theme === 'dark') {
            setBackgroundColorTheme("#202124");
            setColorTheme("#fffefeff")
        } else {
            setBackgroundColorTheme("#fffefeff");
            setColorTheme("#030303")
        }
    },[theme])


    return (
        <ThemeContext.Provider value={{ theme, setTheme, colorTheme, backgroundColorTheme }} >
            <div
                style={{
                    margin: 0,
                    minHeight: "100vh",
                    position: "relative",
                    textAlign: "center",
                    backgroundColor: theme === 'dark' ? "#202124" : "#fffefeff",
                    color: theme === 'dark' ? "#fffefeff" : "#030303",
                }}
            >

                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default GlobalTheme