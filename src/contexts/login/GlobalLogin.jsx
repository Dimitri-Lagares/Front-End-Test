import { useEffect, useState } from "react";
import LoginContext from "./LoginContext";
import axios from "axios";

const GlobalLogin = ({ children }) => {
    const [isLogged, setIsLogged] = useState(true);
    const [tokenAuthenticator, setTokenAuthenticator] = useState("")
    const URL = 'https://integrator-project-back-end.onrender.com';

    useEffect(() => {
        if (localStorage.getItem("session") !== null) {
            const config = {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYTEiLCJwYXNzd29yZCI6InBydWViYTEiLCJpYXQiOjE2ODkxMjk2NzF9.ZTJ1g5I-QX78CnvBAquzj-luFShUe-j2SDgVTt09QMc'
                }
            };
            axios.get(`${URL}/form/authenticate`, config)
            .then((function (response) {
                setTokenAuthenticator(response)}))
                
            console.log("tokenAuthenticator", tokenAuthenticator);
            setIsLogged(true);
        }
    }, []);

    return (
        <LoginContext.Provider value={{ isLogged, setIsLogged }} >
            {children}
        </LoginContext.Provider>
    )
}

export default GlobalLogin