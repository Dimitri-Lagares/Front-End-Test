import { useEffect, useState } from "react";
import LoginContext from "./LoginContext";

const GlobalLogin = ({ children }) => {
    const [isLogged, setIsLogged] = useState(true);

    useEffect(()=>{
        if (localStorage.getItem("session") !== null) {
            setIsLogged(true);
        }
    },[]);

    return (
        <LoginContext.Provider value={{ isLogged, setIsLogged }} >
            {children}
        </LoginContext.Provider>
    )
}

export default GlobalLogin