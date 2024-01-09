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
      fontFamily:'Black Ops One',
      m: 1,
      fontWeight: 900,
      textDecoration: "none",
      background: "linear-gradient(to top left, darkblue, lightblue, darkblue)",
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