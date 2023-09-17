import { WhatsApp as WhatsAppIcon } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const WhatsAppButton = () => {

    const handleClick = () => {
        window.open("https://api.whatsapp.com/send?phone=573236642619&text=Hola+escribo+desde+tu+página+portafolio")
    }
    return (
        <IconButton
            onClick={handleClick}
            disableRipple
            sx={{
                position: "fixed",
                bottom: ".5%",
                right: ".5%",
                backgroundColor: "#27C04F",
            }}
        >
            <WhatsAppIcon sx={{
                fontSize: 40,
                color: "white",
            }} />
        </IconButton>
    )
}

export default WhatsAppButton