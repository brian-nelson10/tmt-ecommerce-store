import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Profile from './profile';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Header() {
  const theme = createTheme({
    palette: {
        main: {
            peach: 'rgb(246, 217, 180)',
            pink: 'rgb(255, 142, 162)',
            deep: 'deeppink'
        },
    },
    typography: {
        fontFamily: [
            'Lacquer'
        ].join(','),
       },});

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx ={{ bgcolor: 'main.peach', boxShadow: 'none'}} >
        <Toolbar bgcolor="main.peach">
         
            <div >
                <Profile />
              {/* <Button
              
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                
                
                
              ><img alt="skull" src={Skull} style={{ height: '80px', backgroundColor: 'main.peach' }}></img>
                
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {Auth.loggedIn() ? (
                <><MenuItem onClick={(e) => navigate("/orderHistory")}>My Orders</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem></>
                ) : (
                    <MenuItem onClick={(e) => navigate("/login")}>Login</MenuItem>
                )}
              </Menu> */}
            </div>
    
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}