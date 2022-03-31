import React from 'react';
import Button from '@mui/material/Button';
import TableEditPageInsertScoreOne from './TableEditPageInsertScoreOne'
import TableEditPageInsertScoreTwo from './TableEditPageInsertScoreTwo'
import Container from '@mui/material/Container';


export default function EditPageInsertScore() {
  return(
<React.Fragment>
<div className="cotainerDetail">
            <p className="HeadTextMain">ชั่วโมงการศึกษา และคะแนนความประพฤติ</p>
            <div className="containerNameStu">
                <p className="HeadTextNameStu">เลขประจำตัว นทน. :64000001 เลขประจำตัวข้าราชการ :64000001 ชื่อ :จ.อ. อาทิตย์  แสนโคก</p>
            </div>
            <Container >
            <h3>สรุปชั่วโมงการศึกษา</h3>
            <TableEditPageInsertScoreOne />
            </Container>
            <Container >
            <h3>ประวัติการลา</h3>
            <TableEditPageInsertScoreTwo />
            </Container>
            
            <div className="containerBack">
                        <a href="/PageInsertScore"><Button variant="outlined" sx={{minWidth: 250, m:1  }}>ย้อนกลับ</Button></a>
            </div>
        </div>
</React.Fragment>
  );
}
