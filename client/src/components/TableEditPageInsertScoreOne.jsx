import React from 'react';
import { DataGrid } from '@mui/x-data-grid';




const columns = [
    { field: 'studyperiod', headerName: 'ระยะเวลาการศึกษา', width: 200 },
    { field: 'hoursofleave', headerName: 'จำนวนชั่วโมงลากิจ', width: 200 },
    { field: 'hoursofsickleave', headerName: 'จำนวนชั่วโมงลาป่วย', width: 180 },
    { field: 'totaltimestudy', headerName: 'รวมเวลามาเรียน', width: 180 },
    { field: 'percentagestudy', headerName: 'ร้อยละเวลามาเรียน', width: 180 },
    { field: 'conductscore', headerName: 'คะแนนความประพฤติ', width: 180 },
    
]

const rows = [
    { id: 1, studyperiod: 5 ,  hoursofleave: 6 , hoursofsickleave : 8 ,totaltimestudy:9,percentagestudy:10,conductscore:11},
   
  
]

export default function TableEditPageInsertScoreOne() {
  return(
<React.Fragment>
<div style={{ height: 200, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
