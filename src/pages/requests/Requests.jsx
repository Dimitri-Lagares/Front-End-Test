import { Box } from "@mui/material"
import BasicTable from "../../components/BasicTable"

const Requests = () => {
  return (
    <>
    <div style={{paddingTop:"10vh"}}>Solicitudes</div>
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