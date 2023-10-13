import { Box } from "@mui/material"
import BasicTable from "../../components/BasicTable"
import { useContext } from "react"
import { LanguageContext } from "../../contexts"

const Requests = () => {
  const {language} = useContext(LanguageContext)
  return (
    <>
    <div style={{paddingTop:"10vh"}}>{language.requests.pagetitle}</div>
    <Box sx={{
      m:"auto",
      p:"1%"
    }}
    >
    <BasicTable/>
    </Box>
    </>
  )
}

export default Requests