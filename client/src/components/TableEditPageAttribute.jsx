import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'personalattributes', headerName: 'คุณลักษณะส่วนบุคคล', width:350 },
    { field: 'fullscore', headerName: 'คะแนนเต็ม', width: 350 },
    { field: 'score', headerName: 'คะแนนที่ได้', width: 350 , renderCell : (params)=>{
        return (
          <>
           <input  class="form-control" />
          </>
        )
      }},
]

const rows = [
    { id: 1, personalattributes: 'ด้านที่ 1 ความวิริยะอุตสาหะ' ,  fullscore: 4 },
    { id: 2, personalattributes: 'ด้านที่ 2 วินัย' ,  fullscore: 4 },
    { id: 3, personalattributes: 'ด้านที่ 3 ความประพฤติ' ,  fullscore: 4 },
    { id: 4, personalattributes: 'ด้านที่ 4 บุคลิกลักษณะ' ,  fullscore: 4 },
    { id: 5, personalattributes: 'ด้านที่ 5 นิสัยและอุปนิสัย' ,  fullscore: 4 },
    { id: 6, personalattributes: 'ด้านที่ 6 การสังคม' ,  fullscore: 4 },
    { id: 7, personalattributes: 'ด้านที่ 7 ความเป็นผู้นำ' ,  fullscore: 4 },
    { id: 8, personalattributes: 'ด้านที่ 8 เชาว์ริเริ่ม' ,  fullscore: 4 },
    { id: 9, personalattributes: 'ด้านที่ 9 การปฏิบัติงาน' ,  fullscore: 4 },
    { id: 10, personalattributes: 'ด้านที่ 10 ดุลยพินิจ' ,  fullscore: 4 },
   
  
]

export default function TableEditPageAttribute() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
