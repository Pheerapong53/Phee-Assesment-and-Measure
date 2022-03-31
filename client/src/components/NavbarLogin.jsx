import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function NavbarLogin() {

  return(
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'flex-end'}}>
          <a href="/"><Button color="inherit" startIcon={<ArrowBackIcon />}>Select School</Button></a>
          
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  );
}
