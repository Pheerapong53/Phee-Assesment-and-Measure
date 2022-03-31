import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Edit} from '@material-ui/icons';
import {Comment} from '@material-ui/icons';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'studentid', headerName: 'เลขประจำตัว', width: 110 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
    {
      field: 'gpa',
      headerName: 'เกรดเฉลี่ยสะสม/GPA',
      width: 150,
      renderCell : (params)=>{
          return (
            <>
               <input  class="form-control" />
               
            </>
          )
        }
    },
    {
        field: 'averagescore',
        headerName:'คะแนนเฉลี่ยคุณลักษณะส่วนบุคคล',
        width: 230,
        renderCell : (params)=>{
            return (
              <>
                   <input  class="form-control" />
              </>
            )
          }
    },
    {
        field: 'comment',
        headerName: 'ความคิดเห็นผู้บังคับบัญชา',
        width: 180,
        renderCell : (params)=>{
            return (
              <>
                <Comment className="userListComment" />
              </>
            )
          }
    },
    {
        field: 'details',
        headerName: 'รายละเอียดเพิ่มเติม',
        width: 140,
        renderCell : (params)=>{
            return (
              <>
                <a href="/PageEditSummarize"><Edit className="userListDate" /></a>
              </>
            )
          }
    },
    {
        field: 'note',
        headerName: 'หมายเหตุ',
        width: 130,
        renderCell : (params)=>{
            return (
              <>
                <p>ยังไม่ได้ใส่คะแนน</p>
              </>
            )
          }
    }
]

const rows = [
    { id: 1, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 2, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 3, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 4, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 5, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 6, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 7, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 8, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 9, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  },
    { id: 10, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  }
  
]

export default function TableSummarize() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
