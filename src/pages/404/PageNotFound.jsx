import { IconButton, Typography, Box } from '@mui/material'
import Dragon from '/Dragon.svg'
import { Navigate } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md:"row",},
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <IconButton href='/#/'>
        <img src={Dragon} className="logo" alt="Dragon" style={{ width:"90%" }} />
      </IconButton>
      <Typography color={'inherit'} sx={{ m: 2 }}>
        Oops! This page doesn't exist... But don't worry, you can press on the logo to go home
      </Typography>
    </Box>
  )
}

export default PageNotFound