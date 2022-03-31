import React from 'react';
import Container from '@mui/material/Container';
import TableEditPageSummarize from '../components/TableEditPageSummarize'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function EditPageSummarize() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">ผลประเมินความรู้ความสามารถ</p>
        <div className="containerNameStu">
                <p className="HeadTextNameStu">เลขประจำตัว นทน. :64000001 เลขประจำตัวข้าราชการ :64000001 ชื่อ :จ.อ. อาทิตย์  แสนโคก</p>
        </div>
        <Container >
                <TableEditPageSummarize />
                <TextField id="outlined-multiline-static" label="ความคิดเห็นของผู้บังคับบัญชา" multiline rows={4} sx={{width: '100%'}} />
                <div className="containerBack">
                        <a href="/PageSummarize"><Button variant="outlined" sx={{minWidth: 200, m:1  }}>บันทึก</Button></a>
                        <a href="/PageSummarize"><Button variant="outlined" sx={{minWidth: 200, m:1  }}>ย้อนกลับ</Button></a>
                </div>
        </Container>

        </div>
</React.Fragment>
  );
}
