import React, { useState, forwardRef, useContext } from 'react';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material"
import { IconButton, Dialog, Toolbar, Box, List, Slide, Divider } from "@mui/material"
import { AppBarLinks, Logo } from './'
import { ThemeContext } from '../../../contexts/dark-light-theme/ThemeContext';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const HamburguerMenu = ({ pages, externalLinks, languages }) => {

    const { colorTheme, backgroundColorTheme } = useContext(ThemeContext)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };
    return (
        <>
            <IconButton sx={{ m: 0, p: 0 }} color="primary"
                onClick={handleClickOpen}
            >
                <MenuIcon />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
            >
                <Toolbar sx={{ backgroundColor: backgroundColorTheme }}>
                    <IconButton
                        sx={{
                            position: "absolute",
                        }}
                        edge="start"
                        color="primary"
                        onClick={handleClickClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ m: "auto" }}>
                        <Logo />
                        <Divider flexItem variant="middle" sx={{
                            border: ".1 solid transparent",
                            borderImage: "linear-gradient(to top left, blue, red, blue) 1",
                            overflow: "hidden"
                        }} />
                    </Box>
                </Toolbar>
                <List sx={{ backgroundColor: backgroundColorTheme, color: colorTheme, height: "100%" }}>
                    <AppBarLinks tag={true} icon2={<ExpandMoreIcon color='primary' />} orientationDisplay={"column"} iconsMD={"displayMD"} alternateEmailMD={"none"} pages={pages} externalLinks={externalLinks} languages={languages} />
                </List>
            </Dialog>
        </>
    )
}

export default HamburguerMenu