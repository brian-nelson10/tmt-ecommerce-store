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
      <AppBar position="sticky" sx ={{ bgcolor: 'transparent', boxShadow: 'none'}} >
        <Toolbar position="sticky" sx={{ bgcolor: "transparent" }}>
         
            <div >
                <Profile />
            </div>
    
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}