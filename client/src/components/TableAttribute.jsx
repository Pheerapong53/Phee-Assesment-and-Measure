import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Edit} from '@material-ui/icons';
import {Check} from '@material-ui/icons';
import {Print} from '@material-ui/icons';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'studentid', headerName: 'เลขประจำตัว', width: 110 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
    {
      field: 'fullscore',
      headerName: 'รวมคะแนนเต็ม',
      width: 130,
      renderCell : (params)=>{
          return (
            <>
               <input  class="form-control" />
               
            </>
          )
        }
    },
    {
        field: 'score',
        headerName:'คะแนนที่ได้',
        width: 130,
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
        headerName: 'คะแนนเฉลี่ย',
        width: 130,
        renderCell : (params)=>{
            return (
              <>
                <input  class="form-control" />
              </>
            )
          }
    },
    {
        field: 'edit',
        headerName: 'แก้ไข/ประเมินผลการเรียน',
        width: 180,
        renderCell : (params)=>{
            return (
              <>
                <a href="/PageEditAttribute"><Edit className="userListDate" /></a>
              </>
            )
          }
    },
    {
        field: 'status',
        headerName: 'สถานะ',
        width: 70,
        renderCell : (params)=>{
            return (
              <>
                <Check className="userListStatus" />
              </>
            )
          }
    },
    {
        field: 'print',
        headerName: 'พิมพ์',
        width: 70,
        renderCell : (params)=>{
            return (
              <>
               <Print className="userListPrint" />
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
export default function TableAttribute() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
