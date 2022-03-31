import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ArticleIcon from '@mui/icons-material/Article';


const columns = [
    { field: 'no', headerName: 'ลำดับ', width: 100 },
    { field: 'leavestartdate', headerName: 'วันเริ่มต้นลา', width: 110 },
    { field: 'leavestarttime', headerName: 'เวลาเริ้มต้นลา', width: 150 },
    { field: 'leaveenddate', headerName: 'วันสิ้นสุดการลา', width: 150 },
    { field: 'leaveendtime', headerName: 'เวลาสิ้นสุดการลา', width: 150 },
    { field: 'numberofhoursleave', headerName: 'จำนวนชั่วโมงลา', width: 150 },
    { field: 'leavetype', headerName: 'ประเภทการลา', width: 150 },
    { field: 'persontakingtheleave', headerName: 'ผู้ลงการลา', width: 150 },
    { field: 'leavedocument', headerName: 'เอกสารการลา', width: 150 ,renderCell : (params)=>{
        return (
          <>
            <ArticleIcon  />
          </>
        )
      }},
     
    
]

const rows = [
    { id: 1, no: 1 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A'},
    { id: 2, no: 2 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A'},
    { id: 3, no: 3 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' },
    { id: 4, no: 4 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' },
    { id: 5, no: 5 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' },
    { id: 6, no: 6 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' },
    { id: 7, no: 7 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A'  },
    { id: 8, no: 8 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' },
    { id: 9, no: 9 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A'  },
    { id: 10,no: 10 ,  leavestartdate: '1 ธ.ค.64' , leavestarttime : '08.00น.' ,leaveenddate:'1 ธ.ค.64',leaveendtime:16.00,numberofhoursleave:11,leavetype:'ลาป่วย',persontakingtheleave:'A' }
  
]


export default function TableEditPageInsertScoreTwo() {
  return(
    <React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
    </React.Fragment>
  );
}
