import { Stack, Box, Button, IconButton, Divider, Typography, Grid, MenuItem } from "@mui/material"
import { Translate as TranslateIcon, Stream as StreamIcon } from "@mui/icons-material"
import { MenuBase, DarkLightSwitch } from "./"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/dark-light-theme/ThemeContext"

const AppBarLinks = ({ tag, icon2, pages, externalLinks, languages, alternateEmailMD, iconsMD, orientationDisplay }) => {
    const { colorTheme } =useContext(ThemeContext)
    const [PagesItem, setPagesItem] = useState(null);
    const [languagesItem, setLanguagesItem] = useState(null);
    // const selected = (event) => {
    //     let itemSelected = event.currentTarget.innerText;
    //     let redirection = '#' + itemSelected;
    //     navigate(redirection);
    //   }
    return (
        <>
            <Stack sx={{ display: "flex", flexDirection: [orientationDisplay] }}>
                <Box sx={{ display: "flex", flexDirection: [orientationDisplay] }}>
                    {pages.map((page, index) => (
                        <Button
                            id={page.id}
                            key={index}
                            onClick={(e) => setPagesItem(e.target.id)}
                            color='inherit'
                            sx={{ m: "auto" }}
                        >
                            {page.content}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                    <MenuBase tag={tag} icon2={icon2} icon={<TranslateIcon color="primary" />} languages={languages}>
                        {languages.map((language, index) => (
                            <MenuItem id={language.id} key={index} onClick={() => setLanguagesItem(language.id)} >
                                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                                    <Typography
                                        fontFamily={"Noto Color Emoji"}
                                        textAlign="center"
                                        letterSpacing={10}
                                    >
                                        {language.flag}
                                    </Typography>
                                    <Typography textAlign="center">
                                        {language.language}
                                    </Typography>
                                </Grid>
                            </MenuItem>
                        ))}
                    </MenuBase>
                </Box>
                <Box sx={{ m: "auto", display: "flex", flexDirection: "row" }}>
                    <DarkLightSwitch />
                </Box>
                <Box sx={{ m: "auto" }}>
                    <Grid sx={{ display: { md: [iconsMD], lg: "inline-flex" } }} >
                        {
                            externalLinks.map((Link, index) => {
                                return (
                                    <IconButton
                                        key={index}
                                        size="large"
                                        sx={{ color: [Link.color] }}
                                        onClick={() => window.open(Link.web)}
                                    >
                                        {Link.tag}
                                    </IconButton>
                                )
                            })
                        }
                    </Grid>
                    <Divider variant="fullWidth" sx={{
                        display: { md: "none" },
                        border: ".1 solid transparent",
                        borderImage: "linear-gradient(to top left, blue, red, blue) 1",
                        overflow: "hidden"
                    }} />
                </Box>
                <Box sx={{ m: "auto", display: { xs: "none", sm: "none", md: [alternateEmailMD], lg: "none" } }}>
                    <MenuBase icon2={icon2} icon={<StreamIcon color="info" />} languages={externalLinks} >
                        {
                            externalLinks.map((Link, index) => {
                                return (
                                    <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <Box sx={{ display: "inline-flex", alignmentBaseline: "central" }}>
                                            <IconButton
                                                key={index}
                                                size="large"
                                                sx={{ color: [Link.color], borderRadius: 0, width: "100%", justifyContent: "left" }}
                                                onClick={() => window.open(Link.web)}
                                            >
                                                {Link.tag}
                                                <Typography sx={{ ml: 1, color: colorTheme, alignSelf: "center" }}>
                                                    {Link.name}
                                                </Typography>
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                )
                            })
                        }
                    </MenuBase>

                </Box>
                <Box sx={{ m: "auto", display: { md: "none" }, }}>
                    <Typography >lagares.dimitri@gmail.com</Typography>
                </Box>
            </Stack>
        </>
    )
}

export default AppBarLinks