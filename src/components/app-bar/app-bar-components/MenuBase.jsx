import { Box, Menu, IconButton, Stack } from '@mui/material';
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/Index';

const MenuBase = ({ children, icon, icon2 = null, tag = false }) => {

  const { backgroundColorTheme, colorTheme } = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTag, setOpenTag] = useState(false)
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClickTag = (e) => {
    setOpenTag(!openTag);
  };

  const handleCloseMenu = (e) => {
    setAnchorEl(null);
  };

  return (
    <Stack sx={tag && { borderRadius: "4px", width: {xs:"50vw",sm:"25vw", md:"15vw", lg:"12vw"}, border: "solid", borderWidth: .1, color: "inherit", m: "auto", textAlign: "center" }}>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={openMenu ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={tag ? handleClickTag : handleClickMenu}
        >
          {icon}
          {icon2}
        </IconButton>

        {!tag &&
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor: backgroundColorTheme,
                color: colorTheme,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 80,
                  width: 10,
                  height: 10,
                  bgcolor: backgroundColorTheme,
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            {children}
          </Menu>}

        {tag &&
          <>
            {openTag &&
              <Box
                sx={{ borderRadius: "4px", width: {xs:"50vw",sm:"25vw", md:"15vw", lg:"12vw"}, border: "solid", borderWidth: .1, color: "inherit", display: "flex", flexDirection: "column" }} >
                <div style={{ margin: "auto" }}>
                  {children}
                </div>
              </Box>
            }
          </>
        }
      </div>
    </Stack>
  )
}

export default MenuBase