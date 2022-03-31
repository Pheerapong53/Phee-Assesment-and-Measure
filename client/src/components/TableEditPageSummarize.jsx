import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function TableEditPageSummarize() {
  return(
<React.Fragment>
<div style={{ height: 400, width: '100%' }}>
<TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell><p className="TextHeadSum">ชื่อหมวดวิชา</p></TableCell>
            <TableCell><p  className="TextHeadSum">ค่าระดับคะแนน</p></TableCell>
            <TableCell><p  className="TextHeadSum">ระดับคะแนนที่ได้</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
            <TableRow>
              <TableCell>หมวดวิชา 1 พื้นฐานของผู้นำและผู้บังคับบัญชา</TableCell>
              <TableCell >A</TableCell>
              <TableCell >3.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>หมวดวิชา 2 การทหารและกิจการกองทัพอากาศ</TableCell>
              <TableCell >A</TableCell>
              <TableCell >3.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>หมวดวิชา 3 การฝึกความเป็นผู้นำทางการทหาร</TableCell>
              <TableCell >A</TableCell>
              <TableCell >3.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>หมวดวิชา 4 กิจกรรมและวิชาเสริมหลังสูตร</TableCell>
              <TableCell >A</TableCell>
              <TableCell >3.50</TableCell>
            </TableRow>
          

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>เฉลี่ยตลอดหลังสูตร</TableCell>
            <TableCell>3.50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
</div>
</React.Fragment>
  );
}
