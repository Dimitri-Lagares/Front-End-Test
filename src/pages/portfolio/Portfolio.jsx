import { useContext, useState } from "react";
import { Box, Stack, Alert, Button, Typography } from "@mui/material";
import { Send as SendIcon } from '@mui/icons-material';
import { FormField } from "../../components";
import { LanguageContext, ThemeContext } from "../../contexts";
import axios from "axios";

const Portfolio = () => {

  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  const [comment, setComment] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

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
    <main style={{ paddingTop: "9vh", paddingBottom: "8vh", textAlign: "initial" }}>

      <section id="contactme">
        {/* <Alert severity="info">Esta pagina web aun se encuentra en construccion, si deseas probrar el sistema login y ver que hay dentro puedes usar como email <b>email@email.com</b> y como contraseña <b>password</b> <br /><b>adicionalmente comento que como el backend de mi pagina se encuentra alojado en un servicio gratuito es bastante lento, ¡GRACIAS por tu visita! </b> </Alert> */}
        <Stack sx={{ p: { xs: 4, md: 10 } }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "2rem" }, color: theme, textAlign: "center", WebkitTextStroke: '1px #1976d2ff' }} >{language.portfolio.aboutsection.title}</Typography>
          {showSuccessAlert && <Alert severity="success">Se ha enviado la informacion correctamente</Alert>}
          <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, m: { xs: 0, md: "1%" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", ml: { xs: 0, md: "5px", }, mr: { xs: 0, md: "5px" }, width: "100%" }}>
              <FormField fullWidth={true} sx={{ my: "2.5px" }} type={"text"} value={name} onChange={(e) => setName(e.target.value)} label={language.portfolio.aboutsection.namefield} placeholder={"Dimitri Lagares"} />
              <FormField fullWidth={true} sx={{ my: "2.5px" }} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={language.portfolio.aboutsection.emailfield} placeholder={"Lagares.dimitri@gmail.com"} />
              <FormField fullWidth={true} sx={{ my: "2.5px" }} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} label={language.portfolio.aboutsection.phonenumberfield} placeholder={"3243236642"} />
              <FormField fullWidth={true} sx={{ my: "2.5px" }} type={"text"} value={request} onChange={(e) => setRequest(e.target.value)} label={language.portfolio.aboutsection.requestfield} placeholder={"Cotizacion"} />
            </Box>
            <Box sx={{ ml: { xs: 0, md: "5px", }, mr: { xs: 0, md: "5px" }, width: "100%" }}>
              <FormField fullWidth={true} sx={{ my: "2.5px" }} type={"text"} value={comment} onChange={(e) => setComment(e.target.value)} label={language.portfolio.aboutsection.commentfield} placeholder={"Tengo un modelo de negocio el cual deseo compartir con usted"} multiline={true} rows={9} />
            </Box>
          </Stack>
          <Button sx={{ mt: 1, }} variant='contained' endIcon={<SendIcon />} onClick={buttonSave}>{language.portfolio.aboutsection.sendbutton}</Button>
        </Stack >
      </section>
    </main >
  )
}

export default Portfolio