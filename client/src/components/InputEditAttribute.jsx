import React from 'react';
import Container from '@mui/material/Container';
import TableEditPageAttribute from '../components/TableEditPageAttribute'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputEditAttribute() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">แก้ไขผลคุณลักษณะส่วนบุคคล</p>
        <div className="containerNameStu">
                <p className="HeadTextNameStu">เลขประจำตัว นทน. :64000001 เลขประจำตัวข้าราชการ :64000001 ชื่อ :จ.อ. อาทิตย์  แสนโคก</p>
        </div>
        <Container >
                <TextField id="outlined-basic" label="ผู้ลงคะแนน" variant="outlined" sx={{width: '100%'}} />
                <TableEditPageAttribute />
                <div className="containerBack">
                        <a href="/PageAttribute"><Button variant="outlined" sx={{minWidth: 200, m:1  }}>บันทึก</Button></a>
                        <a href="/PageAttribute"><Button variant="outlined" sx={{minWidth: 200, m:1  }}>ย้อนกลับ</Button></a>
                </div>
        </Container>

        </div>
</React.Fragment>
  );
}
