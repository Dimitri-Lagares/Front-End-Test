import { useContext, useState } from "react";
import { Box, Stack, Alert, Button, Typography } from "@mui/material";
import { Send as SendIcon } from '@mui/icons-material';
import { FormField, CountrySelect } from "../../components";
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
        <Alert severity="info">{language.portfolio.alert.alert}</Alert>
        <Stack sx={{ p: { xs: 4, md: 10 } }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "2rem" }, color: theme, textAlign: "center", WebkitTextStroke: '1px #1976d2ff' }} >{language.portfolio.contactsection.title}</Typography>
          {showSuccessAlert && <Alert severity="success">Se ha enviado la informacion correctamente</Alert>}
          <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, m: { xs: 0, md: "1%" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", ml: { xs: 0, md: "5px", }, mr: { xs: 0, md: "5px" }, width: "100%" }}>
              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"text"} value={name} onClick={(e) => { setField(false) }} onChange={(e) => { setName(e.target.value) }} label={language.portfolio.contactsection.namefield} placeholder={language.portfolio.contactsection.nameplaceholder} />
              <FormField fullWidth={true} sx={{ my: "4px", background: "#1976d2", borderRadius: "4px" }} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={language.portfolio.contactsection.emailfield} placeholder={language.portfolio.contactsection.emailplaceholder} />

              <div style={{ display: "flex", flexDirection: "row"}}>

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