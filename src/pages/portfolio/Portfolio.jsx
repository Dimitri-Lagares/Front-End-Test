import { useContext, useState, useEffect } from "react";
import { Container, Box, Stack, Alert, Button, Typography } from "@mui/material";
import { Send as SendIcon } from '@mui/icons-material';
import { FormField, CountrySelect } from "../../components";
import { LanguageContext, ThemeContext } from "../../contexts";
import DimitriPhoto from "/DimitriPhoto.png"
import Octagon from "../../../public/Octagon.svg"
import axios from "axios";
import { TypeAnimation } from 'react-type-animation';
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  const [comment, setComment] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [sequence, setSequence] = useState(
    ["HTML",
      2000,
      "CSS",
      2000,
      "JavaScript",
      2000,
      "ReactJS",
      2000,
      "ExpressJS",
      2000,
      "SQL",
      2000,
      "Material-UI",
      2000]);

  const URL = 'https://integrator-project-back-end.onrender.com';

  const buttonSave = () => {
    if (name === "" || email === "" || phone === "" || request === "" || comment === "") {
      setShowWarningAlert(true)
      showWarningAlertTimeOut()
    } else {

      axios.post(`${URL}/auth/send-data`, { name, email, phone, request, comment })
        .then((response) => {
          setName("")
          setEmail("")
          setPhone("")
          setRequest("")
          setComment("")
          setShowSuccessAlert(true)
          showSuccessAlertTimeOut()
        }).catch((error) => {
          console.log(error)
          setShowWarningAlert2(true)
          showWarningAlert2TimeOut()
        })
    }
  }

  const showWarningAlertTimeOut = () => {
    setTimeout(() => {
      setShowWarningAlert(false);
    }, 3000);
  }

  return (
    <main
      className={styles.main}
    >
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row"
          }
        }}
        className={styles.front}
        id="front"
      >
        <Box
          sx={{
            width: {
              xs: "100vw",
              sm: "60vw"
            },
            height: {
              xs: "100vh",
              sm: "100vh"
            },
            marginTop: {
              xs: ".5vh",
              sm: "8vh"
            }

          }}
          className={styles.textFrontContainer} >
          <div className={styles.greetingContainer} >
            <h1 className={`${styles.typographyMainStyle} ${styles.greeting}`}
              style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}>
              {language.portfolio.frontsection.greeting}
            </h1>
            <h1 className={styles.greetingHand}>
              {language.portfolio.frontsection.greetinghand}
            </h1>
          </div>

          {language.languageSelected === "es" ? (
            <div>
              <h1 className={`${styles.typographyMainStyle} ${styles.esImDeveloperText}`}
                style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}>
                {language.portfolio.frontsection.imtext} {language.portfolio.frontsection.developertext}
              </h1>
              <TypeAnimation
                sequence={sequence}
                speed={200}
                repeat={Infinity}
                className={`${styles.typographyMainStyle} ${styles.esTypeAnimation}`}
                style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}
              />
            </div>

          ) : (
            <div>
              <div className={styles.imDevelopercontainer}>
                <h1 className={`${styles.typographyMainStyle} ${styles.imText}`}
                  style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}>
                  {language.portfolio.frontsection.imtext}
                </h1>
                <TypeAnimation
                  sequence={sequence}
                  speed={200}
                  repeat={Infinity}
                  className={`${styles.typographyMainStyle} ${styles.typeAnimation}`}
                  style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}
                />
              </div>
              <div >
                <h1 className={`${styles.typographyMainStyle} ${styles.developerText}`}
                  style={{ fontFamily: language.languageSelected == "cn" ? 'Noto Serif SC' : 'Carter One' }}>
                  {language.portfolio.frontsection.developertext}
                </h1>
              </div>
            </div>
          )
          }

        </Box>
        <Box
          // sx={{

          //   width: {
          //     xs: "100%",
          //     sm: "100%"
          //   },
          //   height: {
          //     xs: "100%",
          //     sm: "100%"
          //   }
          // }}
          className={styles.frontPhotoContainer} >
          <img className={styles.frontPhoto} src={DimitriPhoto} alt="Foto donde aparece Dimitri" />
        </Box>

      </Box>
      <section id="aboutme">
        <Typography fontFamily={language.languageSelected == "cn" ? 'Noto Serif SC' : 'Black Ops One'}
          className={styles.titlesStyles}
        >
          {language.app.pages[0]}
        </Typography>
        <h4 className={styles.innerAboutMe}>
          Soy un programador full stack junior con más de 8 años de experiencia en computación,
          hardware, software y redes. He impartido cursos y talleres sobre reparación,
          mantenimiento de computación y seguridad informática básica. Soy proactivo,
          creativo y adaptable. Mi pasión por la tecnología comenzó a los 9 años cuando
          empecé a reparar computadoras, instalar y configurar sistemas operativos y programas
          en diferentes plataformas. He colaborado con agencias del gobierno de Venezuela dando
          talleres y solucionando problemas complejos. Actualmente, me enfoco en el desarrollo
          web y estoy explorando diferentes lenguajes y herramientas. Mi meta es aprender
          inteligencia artificial y machine learning para crear aplicaciones innovadoras y disruptivas.
        </h4>
      </section>

      <section style={{ height: "50vh" }} id="technologies">
        <Typography fontFamily={'Black Ops One'} fontSize={30} textAlign={"center"}>
          {language.app.pages[1]}
        </Typography>
        <article>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <image href={DimitriPhoto} x="0" y="0" width="10%" height="10%" />
           <image style={{
             overflow:"hidden",
            }} href={Octagon} x="0" y="0" width="10%" height="10%" />
         </svg>
        </article>
      </section>

      <section style={{ height: "90vh" }} id="projects">
        <Typography fontFamily={'Black Ops One'} fontSize={30} textAlign={"center"}>
          {language.app.pages[2]}
        </Typography>
      </section>

      <section style={{ height: "100vh" }} id="contactme">
        <Typography fontFamily={'Black Ops One'} fontSize={30} textAlign={"center"}>
          {language.app.pages[3]}
        </Typography>
        <Alert severity="info">{language.portfolio.alert.alert}</Alert>
        <Stack sx={{ p: { xs: 4, md: 10 } }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "2rem" }, color: theme, textAlign: "center", WebkitTextStroke: '1px #1976d2ff' }} >{language.portfolio.contactsection.title}</Typography>
          {showSuccessAlert && <Alert severity="success">Se ha enviado la informacion correctamente</Alert>}
          <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, m: { xs: 0, md: "1%" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", ml: { xs: 0, md: "5px", }, mr: { xs: 0, md: "5px" }, width: "100%" }}>
              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"text"} value={name} onClick={(e) => { setField(false) }} onChange={(e) => { setName(e.target.value) }} label={language.portfolio.contactsection.namefield} placeholder={language.portfolio.contactsection.nameplaceholder} />
              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={language.portfolio.contactsection.emailfield} placeholder={language.portfolio.contactsection.emailplaceholder} />

              <div style={{ display: "flex", flexDirection: "row" }}>

                <div style={{ width: "50%" }} >
                  <CountrySelect sx={{ width: "98%", my: "4px", background: "#1976d2", borderRadius: "4px" }} />
                </div>
                <div style={{ width: "50%" }}>
                  <FormField sx={{ width: "100%", my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} label={language.portfolio.contactsection.phonenumberfield} placeholder={language.portfolio.contactsection.phonenumberplaceholder} />
                </div>

              </div>

              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"text"} value={request} onChange={(e) => setRequest(e.target.value)} label={language.portfolio.contactsection.requestfield} placeholder={language.portfolio.contactsection.requestplaceholder} />
            </Box>
            <Box sx={{ ml: { xs: 0, md: "5px", }, mr: { xs: 0, md: "5px" }, width: "100%" }}>
              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"text"} value={comment} onChange={(e) => setComment(e.target.value)} label={language.portfolio.contactsection.commentfield} placeholder={language.portfolio.contactsection.commentplaceholder} multiline={true} rows={9.3} />
            </Box>
          </Stack>
          <Button sx={{ mt: 1, }} variant='contained' endIcon={<SendIcon />} onClick={buttonSave}>{language.portfolio.contactsection.sendbutton}</Button>
        </Stack >
      </section>
    </main >
  )
}

export default Portfolio