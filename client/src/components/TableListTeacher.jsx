import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DropdownListTeacher from '../components/DropdownListTeacher'


const columns = [
    { field: 'no', headerName: 'ลำดับ', width: 200 },
    { field: 'teacherid', headerName: 'เลขประจำตัว', width: 200 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 220 },
    { field: 'level', headerName: 'สิทธิ์', width: 200 },
    { field: 'subject', headerName: 'วิชาที่สอน', width: 330,renderCell : (params)=>{
        return (
          <>
            <DropdownListTeacher  />
          </>
        )
      } },
]

const rows = [
    { id: 1,no:1 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 2,no:2 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 3,no:3 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 4,no:4 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 5,no:5 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 6,no:6 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 7,no:7 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 8,no:8 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 9,no:9 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
    { id: 10,no:10 ,teacherid:6400001 ,name:'จ.อ.อาทิตย์ แสนโคก' , level:'ประจำหมวดวิชา'},
]
export default function TableListTeacher() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
    </div>
</React.Fragment>
  );
}
