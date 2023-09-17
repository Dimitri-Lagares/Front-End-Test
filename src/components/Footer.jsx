import { AppBar, Typography } from "@mui/material"
import React, { useState } from "react"

const Footer = () => {
    return (
        <>
            <div
                style={{
                    minHeight: "3.8em",
                    minWidth: "100vw",
                    boxShadow: "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
                    position: "absolute",
                    bottom: "0px",
                }}
            >
                <div
                    style={{    
                        position: 'absolute', 
                        left: '50%', 
                        top: '50%',
                        transform: 'translate(-61%, -50%)'
                 }}
                >
                    <Typography sx={{ fontSize: { xs: "1.4rem", md: "2rem" } }}>
                        lagares.dimitri@gmail.com
                    </Typography>
                </div>
            </div>
        </>
    )
}
export default Footer