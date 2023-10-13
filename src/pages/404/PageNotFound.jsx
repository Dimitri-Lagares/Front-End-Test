import { IconButton, Typography, Box } from '@mui/material'
import Dragon from '/Dragon.svg'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/'

const PageNotFound = () => {
  const { language } = useContext(LanguageContext)
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
        <img src={Dragon} className="logo" alt={language.PageNotFound.alt} style={{ width:"90%" }} />
      </IconButton>
      <Typography color={'inherit'} sx={{ m: 2 }}>
      {language.PageNotFound.text}
      </Typography>
    </Box>
  )
}

export default PageNotFound