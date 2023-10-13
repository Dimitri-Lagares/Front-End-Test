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

  return (
    <>
      <AppBarMain
        pages={[{ "id": "aboutme-link", "content": language.app.pages[0] },
        { "id": "technologies-link", "content": language.app.pages[1] },
        { "id": "projects-link", "content": language.app.pages[2] },
        { "id": "contactme-link", "content": language.app.pages[3] }
        ]}

        externalLinks={[{ "name": "Youtube", "tag": <YouTube />, "color": "#FE0001", "web": "https://www.youtube.com/channel/UCgrOO8EWuE2XrXt-o48qS0Q" },
        { "name": "GitHub", "tag": <GitHub />, "color": "inherit", "web": "https://github.com/Dimitri-Lagares/" },
        { "name": "WhatsApp", "tag": <WhatsApp />, "color": "#27C04F", "web": "https://api.whatsapp.com/send?phone=573236642619&text=Hola+escribo+desde+tu+página+portafolio" },
        { "name": "LinkedIn", "tag": <LinkedIn />, "color": "#1865BD", "web": "https://co.linkedin.com/in/dimitri-lagares/" },
        { "name": language.app.externalLinks[0], "tag": <Email />, "color": "gray", "web": "mailto:lagares.dimitri@gmail.com" }
        ]}
        const languages={[{ "id": "en", "flag": "🇬🇧", "language": language.app.languages[0] },
        { "id": "es", "flag": "🇪🇸", "language": language.app.languages[1] },
        { "id": "cn", "flag": "🇨🇳", "language": language.app.languages[2] }
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