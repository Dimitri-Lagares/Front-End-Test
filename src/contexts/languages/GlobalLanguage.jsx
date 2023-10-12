import { useState, useEffect } from 'react'
import LanguageContext from './LanguageContext'
import { en, es, cn } from "../../languages"

const GlobalLanguage = ({ children }) => {
    const [language, setLanguage] = useState([])
    const [getLanguage, setGetLanguage] = useState("")

    useEffect(() => {
        setGetLanguage(navigator.language.toLowerCase())
        if (localStorage.getItem("language") == "en" || localStorage.getItem("language") == "es" || localStorage.getItem("language") == "cn") {
            setGetLanguage(localStorage.getItem("language"))
        }
        if (getLanguage.includes("es")) {
            setLanguage(es)
        } else {
            if (getLanguage.includes("cn")) {
                setLanguage(cn)
            } else {
                setLanguage(en) 
            }
        }
    }, [getLanguage])
console.log(getLanguage);
    return (
        <LanguageContext.Provider value={{ setGetLanguage, language }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default GlobalLanguage