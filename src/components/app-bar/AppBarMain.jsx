import React, { useState, useContext } from 'react';
import { AppBar, Box, Typography, Button } from '@mui/material';
import { Login as LoginIcon, Logout as LogoutIcon, ExpandMore as ExpandMoreIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { Logo, HamburguerMenu, AppBarLinks } from "./app-bar-components";
import { ThemeContext } from '../../contexts/Index';
import { Link, Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const GradientIcon = ({ icon }) => {
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="darkblue" />
          <stop offset={1} stopColor="lightblue" />
          <stop offset={2} stopColor="darkblue" />
        </linearGradient>
      </svg>
      {icon}
    </>
  )
}

const LoginButton = ({ name, icon, href }) => {
  return (
    <Button
      sx={{
        border: "2px solid transparent",
        borderImage: "linear-gradient(to top left, blue, red) 1",
        overflow: "hidden"

      }}
      variant="text"
      endIcon={icon}
    >
      <Typography
        noWrap
        component="a"
        href={href}
        sx={{
          fontWeight: 900,
          color: "inherit",
          textDecoration: "none",
          background: "linear-gradient(to top left, darkblue, lightblue, darkblue )",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

        }}
      >
        {name}
      </Typography>
    </Button>
  )
}

const AppBarMain = ({ pages, externalLinks, languages }) => {

  const { backgroundColorTheme } = useContext(ThemeContext);
  const [buttonChanger, setButtonChanger] = useState(true);

  return (
    <>
      <AppBar position="fixed" sx={{ background: backgroundColorTheme, color: "inherit", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", py: .5, px: { xs: .5, sm: "3%", md: .5, lg: "3%" } }}>
        <Box sx={{ display: { md: "none" } }}>
          <HamburguerMenu pages={pages} externalLinks={externalLinks} languages={languages} />
        </Box>

        <Box>
          <Logo />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <AppBarLinks icon2={<GradientIcon icon={<ExpandMoreIcon sx={{ fill: "url(#linearColors)" }} />} />} orientationDisplay={"row"} iconsMD={"none"} alternateEmailMD={"inline-flex"} pages={pages} externalLinks={externalLinks} languages={languages} />
        </Box>

        <Box direction="row" spacing={2} style={{
          border: "2px solid transparent",
          borderRadius: "4px",
          overflow: "hidden"
        }}
        >
          {!buttonChanger && (
            <LoginButton name={'Iniciar Sesion'} icon={<LoginIcon color='primary' />} href={"/#/login"} />
          )}
          {buttonChanger && (
            <HamburguerMenu icon={<AccountCircleIcon color="primary" />} externalLinks={externalLinks} display={false} >
              <Box
                sx={{
                  m: "auto",
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "50vw", sm: "28vw", md: "19vw", lg: "15vw" }
                }}
              >
                <nav>
                  <a style={{textDecoration: "none", color:"inherit", textTransform:"uppercase", fontFamily:"Roboto", fontWeight:500, letterSpacing: "0.02857em", fontSize: "0.875rem"}} href='/#/requests'>Solicitudes</a>
                </nav>
                <LoginButton name={'Cerrar Sesion'} icon={<LogoutIcon color='primary' />} href={"/#/"} />
              </Box>
            </HamburguerMenu>
          )}
        </Box>
      </AppBar >
    </>
  );
}
export default AppBarMain