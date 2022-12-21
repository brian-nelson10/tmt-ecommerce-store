import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ProfileTwo from './profileTwo';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function HeaderTwo() {
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
    <Box sx={{ flexGrow: 1 }} position="sticky">
      <AppBar position="sticky" sx ={{ bgcolor: 'transparent', boxShadow: 'none', position: 'sticky', height: '100px'}} >
        <Toolbar sx={{bgcolor: "transparent"}} position="sticky">
         
            <div >
                <ProfileTwo />
            </div>
    
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}