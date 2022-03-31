import React from 'react';
import Button from '@mui/material/Button';
import {Print} from '@material-ui/icons';
import TablePrintStudyResultsOne from './TablePrintStudyResultsOne'
import Container from '@mui/material/Container';

export default function PrintStudyResults() {
  return(
<React.Fragment>
    <div className="cotainerDetail">
    <p className="HeadTextMain">รายงานการศึกษา</p>
        <div className='containerBtnResults'>
            <div className="BtnResults"> <a href><Button variant="outlined" startIcon={<Print />} sx={{minWidth: 100, m:1  }}>พิมพ์</Button></a></div>
            <div className="BtnResults"><a href="/PagePrintStudyResults"><Button variant="outlined" sx={{minWidth: 100, m:1  }}>แสดงผลแบบเกรด</Button></a></div>
            <div className="BtnResults"> <a href="/PagePrintStudyResultsOne"><Button variant="outlined" sx={{minWidth: 100, m:1  }}>แสดงผลแบบร้อยละ</Button></a></div>
        </div>
                <Container >
                  <TablePrintStudyResultsOne />
                </Container>
                {/* <a href="/PageStudyResults"><Button variant="outlined" sx={{minWidth: 300, m:1  }}>ย้อนกลับ</Button></a> */}
    </div>
</React.Fragment>
  );
}
