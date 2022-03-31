import React from 'react';
import Container from '@mui/material/Container';
import TableEducationInfo from '../components/TableEducationInfo'

export default function InputEducationInfo() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">ข้อมูลการศึกษา</p>
       
        <Container >
           <TableEducationInfo />
        </Container>

        </div>
</React.Fragment>
  );
}
