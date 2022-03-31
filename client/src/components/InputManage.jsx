import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TableManage from '../components/TableManage'


export default function InputManage() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">จัดการสมาชิก</p>
                    <Container  >
                        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: '100%'}} />
                        <TableManage />
                    </Container>
        </div>
</React.Fragment>
  );
}
