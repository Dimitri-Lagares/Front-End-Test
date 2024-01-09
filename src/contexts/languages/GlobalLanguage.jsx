import { useState, useEffect } from 'react'
import LanguageContext from './LanguageContext'
import { en, es, cn } from "../../languages"

const GlobalLanguage = ({ children }) => {
    const [language, setLanguage] = useState(en)
    const [getLanguage, setGetLanguage] = useState("en")

    useEffect(() => {
        setGetLanguage(navigator.language.toLowerCase())
        if (localStorage.getItem("language") == "en" || localStorage.getItem("language") == "es" || localStorage.getItem("language") == "cn") {
            setGetLanguage(localStorage.getItem("language"))
        }
        if (getLanguage.includes("es")) {
            setLanguage(es)
            document.body.style.fontFamily = "Roboto"
        } else {
            if (getLanguage.includes("cn")) {
                setLanguage(cn)
                document.body.style.fontFamily = "Noto Serif SC";
            } else {
                setLanguage(en)
                document.body.style.fontFamily = "Roboto"
            }
        }
    }, [getLanguage])

    return (
        <LanguageContext.Provider value={{ setGetLanguage, language, getLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default GlobalLanguage