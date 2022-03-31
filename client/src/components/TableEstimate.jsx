import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Check} from '@material-ui/icons';
import {Print} from '@material-ui/icons';
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'studentid', headerName: 'เลขประจำตัว', width: 110 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
    {
      field: 'totalscore',
      headerName: 'คะแนนรวม',
      width: 200,
      renderCell : (params)=>{
          return (
            <>
              <input  class="form-control" />
               <Button size="small">บันทึก</Button>
            </>
          )
        }
    },
    {
        field: 'scoresummary',
        headerName:'สรุปคะแนนทั้งหมด/ร้อยละคะแนนรวม %',
        width: 270,
        renderCell : (params)=>{
            return (
              <>
                   <input  class="form-control" />
              </>
            )
          }
    },
    {
        field: 'grade',
        headerName: 'เกรด',
        width: 100,
        renderCell : (params)=>{
            return (
              <>
                <input  class="form-control" />
              </>
            )
          }
    },
    {
        field: 'status',
        headerName: 'สถานะ',
        width: 100,
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
        width: 130,
        renderCell : (params)=>{
            return (
              <>
                <Print className="userListPrint" />
              </>
            )
          }
    },
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
export default function TableEstimate() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
