import { Typography } from "@mui/material"

const Logo = () => {
  return (
    <>
    <Typography
    variant="h6"
    noWrap
    component="a"
    href="/#/"
    sx={{
      m: 1,
      fontWeight: 900,
      textDecoration: "none",
      background: "linear-gradient(to top left, blue, red, blue)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Dimitri-Lagares
  </Typography>
</>
  )
}

export default Logo