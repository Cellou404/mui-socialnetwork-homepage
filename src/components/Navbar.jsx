import styled from '@emotion/styled'
import { Pets, Mail, Notifications, LightMode, DarkMode } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  color: '#000',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  display: 'none',
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  }
}))

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  alignItems: 'center',
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: "10px",
  cursor: 'pointer',
  [theme.breakpoints.up("sm")]: {
    display: 'none'
  }
}))

const Navbar = ({mode, setMode, changeTheme}) => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CCTECH
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." fullWidth />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar onClick={e=>setOpen(true)} sx={{width: '30px', height: '30px'}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
        </Icons>
        <UserBox>

          <Typography component='span' onClick={changeTheme}>
          {mode === false? <LightMode sx={{width: '30px', height: '30px'}} />: <DarkMode sx={{width: '30px', height: '30px'}} />} 
          </Typography>
        <Box onClick={e=>setOpen(true)}>
          <Avatar sx={{width: '30px', height: '30px'}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
          {/* <Typography variant='span'>John Doe</Typography> */}
          </Box>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar
