import { useState, useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PageNotFound, Login, Portfolio, Requests } from './pages/index'
import { YouTube, GitHub, WhatsApp, LinkedIn, Email } from '@mui/icons-material';
import { AppBarMain, Footer, ProtectedRoute, WhatsAppButton, } from './components';
import { LanguageContext } from './contexts';

function App() {
  const [isAllowed, setIsAllowed] = useState()
  const { language } = useContext(LanguageContext)

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === '') {
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
  }
  // console.log(language.pages[0]);
  return (
    <>
      <AppBarMain
        pages={[{ "id": "aboutme-link", "content": "language.pages[0]" },
        { "id": "technologies-link", "content": "Tecnologias" },
        { "id": "projects-link", "content": "Proyectos" },
        { "id": "contactme-link", "content": "Contactame" }
        ]}

        externalLinks={[{ "name": "Youtube", "tag": <YouTube />, "color": "#FE0001", "web": "https://www.youtube.com/channel/UCgrOO8EWuE2XrXt-o48qS0Q" },
        { "name": "GitHub", "tag": <GitHub />, "color": "inherit", "web": "https://github.com/Dimitri-Lagares/" },
        { "name": "WhatsApp", "tag": <WhatsApp />, "color": "#27C04F", "web": "https://api.whatsapp.com/send?phone=573236642619&text=Hola+escribo+desde+tu+página+portafolio" },
        { "name": "LinkedIn", "tag": <LinkedIn />, "color": "#1865BD", "web": "https://co.linkedin.com/in/dimitri-lagares/" },
        { "name": "Email", "tag": <Email />, "color": "gray", "web": "mailto:lagares.dimitri@gmail.com" }
        ]}
        const languages={[{ "id": "en", "flag": "🇬🇧", "language": "Ingles" },
        { "id": "es", "flag": "🇪🇸", "language": "Español" },
        { "id": "cn", "flag": "🇨🇳", "language": "Mandarin" }
        ]} />
      <HashRouter>
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="login" element={<Login childToParentData={functionToGetchildData} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="requests" element={<Requests />} />
          </Route>
        </Routes>
      </HashRouter>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App