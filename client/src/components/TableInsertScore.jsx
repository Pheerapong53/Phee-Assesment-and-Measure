import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Edit} from '@material-ui/icons';
import {Check} from '@material-ui/icons';
// import {Close} from '@material-ui/icons';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'studentid', headerName: 'เลขประจำตัว', width: 110 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
    {
      field: 'leaveday',
      headerName: 'วันที่ลา',
      width: 70,
      renderCell : (params)=>{
          return (
            <>
              <a href="/PageEditInsertScore"><Edit className="userListDate" /></a>
            </>
          )
        }
    },
    {
        field: 'period',
        headerName:'ระยะเวลาการศึกษา(ชั่วโมง)',
        width: 200,
        renderCell : (params)=>{
            return (
              <>
                   <input  class="form-control" />
              </>
            )
          }
    },
    {
        field: 'leave',
        headerName: 'จำนวนชั่วโมงลากิจ',
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
        field: 'sickleave',
        headerName: 'จำนวนชั่วโมงลาป่วย',
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
        field: 'comestudy',
        headerName: 'รวมเวลามาเรียน',
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
        field: 'percentagecomestudy',
        headerName: 'ร้อยละเวลามาเรียน %',
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
        field: 'conductscore',
        headerName: 'คะแนนความประพฤติ',
        width: 150,
        renderCell : (params)=>{
            return (
              <>
                <input  class="form-control" />
              </>
            )
          }
    },
    { field: 'status', headerName: 'สถานะ', width: 150 , renderCell : (params)=>{
        return (
          <>
            <Check className="userListStatus" />
          </>
        )
      } }
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

export default function TableInsertScore() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
