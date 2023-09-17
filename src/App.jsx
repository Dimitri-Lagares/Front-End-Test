import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PageNotFound, Login, Portfolio, Requests } from './pages/index'
import { YouTube, GitHub, WhatsApp, LinkedIn, Email } from '@mui/icons-material';
import { AppBarMain, Footer, ProtectedRoute, WhatsAppButton, } from './components';
import GlobalTheme from './contexts/dark-light-theme/GlobalTheme';

function App() {
  const [isAllowed, setIsAllowed] = useState()

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === '') {
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
  }

  return (
      <GlobalTheme>
          <AppBarMain
            pages={[{ "id": "about", "content": "¿Quien soy?" },
            { "id": "technologies", "content": "Tecnologias" },
            { "id": "projects", "content": "Proyectos" },
            { "id": "contact", "content": "Contactame" }
            ]}

            externalLinks={[{ "name": "Youtube", "tag": <YouTube />, "color": "#FE0001", "web": "https://www.youtube.com/channel/UCgrOO8EWuE2XrXt-o48qS0Q" },
            { "name": "GitHub", "tag": <GitHub />, "color": "inherit", "web": "https://github.com/Dimitri-Lagares/" },
            { "name": "WhatsApp", "tag": <WhatsApp />, "color": "#27C04F", "web": "https://api.whatsapp.com/send?phone=573236642619&text=Hola+escribo+desde+tu+página+portafolio" },
            { "name": "LinkedIn", "tag": <LinkedIn />, "color": "#1865BD", "web": "https://www.linkedin.com/in/dimitri-lagares/" },
            { "name": "Email", "tag": <Email />, "color": "gray", "web": "mailto:lagares.dimitri@gmail.com" }
            ]}
            const languages={[{ "id": "gb", "flag": "🇬🇧", "language": "Ingles" },
            { "id": "es", "flag": "🇪🇸", "language": "Español" },
            { "id": "cn", "flag": "🇨🇳", "language": "Mandarin" }
            ]} />
          <HashRouter>
            <Routes>
              <Route index element={<Portfolio />} />
              <Route path="login" element={<Login childToParentData={functionToGetchildData} />} />
              <Route path="*" element={<PageNotFound />} />
              <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                <Route path="requests" element={<Requests />} />
              </Route>
            </Routes>
          </HashRouter>
          <Footer />
          <WhatsAppButton />
      </GlobalTheme>
  )
}

export default App