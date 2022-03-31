import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonRegisTeacher () {
  return(
        <React.Fragment>
            <Box sx={{  display: 'flex', justifyContent: 'center' ,alignItems: 'center', m:1 } }>
            <a href="/RegisTeac"><Button variant="outlined" sx={{minWidth: 244, m:1  }}>ตกลง</Button></a>
            <a href="/login"><Button variant="outlined" sx={{minWidth: 244, m:1  }}>ย้อนกลับ</Button></a>
        </Box>
        </React.Fragment>
  );
}
