import React   from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Print} from '@material-ui/icons';


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'studentid', headerName: 'เลขประจำตัว', width: 130 },
  { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
  {
    field: 'corps',
    headerName: 'เหล่า',
    width: 70,
  },
  {
    field: 'grp',
    headerName: 'จำพวก',
    width: 160,
  },
  {
    field: 'dutynum',
    headerName: 'ลชทอ.',
    width: 90,
  },
  {
    field: 'currposition',
    headerName: 'ตำแหน่ง',
    width: 180,
  },
  {
    field: 'affiliation',
    headerName: 'สังกัด',
    width: 100,
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
    field: 'action',
    headerName: 'การจัดการ',
    width: 150,
    renderCell : (params)=>{
      return (
        <>
          <a href="/PageEditHistoryS"><button className="userListEdit">Edit</button></a>
        </>
      )
    }
  },
];

const rows = [
  { id: 1, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 2, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 3, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 4, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 5, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 6, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 7, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 8, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 9, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
  { id: 10, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , corps: 'ส.' , grp: 'สื่อสารอิเล็กทรอนิกส์' ,dutynum:30150 , currposition: 'จนท.ปซ.ผวซ.กมซ.ศซว.ทอ.',affiliation:'สอ.ทอ.' },
];


export default function TableHistoryStu() {


  return(
<React.Fragment>

          
        
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>

</React.Fragment>
  );
}
