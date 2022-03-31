import React from 'react';
import DropdownSelectSchool from '../components/DropdownSelectSchool'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../img/logo.png'

export default function PageSelectSchool() {
  return(
<React.Fragment>

  <Box sx={{  display: 'flex' ,justifyContent: 'center' , alignItems: 'center',flexDirection: 'column' , minHeight:'100vh'} }>
            <img src={Logo} alt="logo" className="logoLogin" />
            <p className="HeadTextShcool">ส่วนการศึกษา</p>
            <DropdownSelectSchool />
            <a href="/login"><Button variant="outlined" sx={{minWidth: 500 }}>ตกลง</Button></a>
        
    </Box>






</React.Fragment>

  );
}
