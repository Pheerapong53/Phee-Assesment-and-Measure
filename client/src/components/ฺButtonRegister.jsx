import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function ButtonRegister() {
  return(
    <React.Fragment>
        <Box sx={{  display: 'flex', justifyContent: 'center' ,alignItems: 'center', m:1 } }>
            <a href="/RegisStu"><Button variant="outlined" sx={{minWidth: 244, m:1  }}>สมัครสมาชิกสำหรับ นทน.</Button></a>
            <a href="/RegisTeac"><Button variant="outlined" sx={{minWidth: 244, m:1  }}>สมัครสมาชิกสำหรับ อาจารย์</Button></a>
        </Box>
    </React.Fragment>
  );
}
