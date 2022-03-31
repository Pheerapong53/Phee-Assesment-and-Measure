import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Print} from '@material-ui/icons';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'studentid', headerName: 'เลขประจำตัว', width: 110 },
    { field: 'name', headerName: 'ยศ ชื่อ สกุล', width: 150 },
    {
      field: 'affiliation',
      headerName: 'สังกัด',
      width: 70,
    },
    {
        field: 'course1',
        headerName:'หมวดวิชาที่1/100คะแนน',
        width: 180,
    },
    {
        field: 'course2',
        headerName: 'หมวดวิชาที่2/100คะแนน',
        width: 180,
    },
    {
        field: 'course3',
        headerName: 'หมวดวิชาที่3/100คะแนน',
        width: 180,
    },
    {
        field: 'course4',
        headerName: 'หมวดวิชาที่4/100คะแนน',
        width: 180,
    },
    {
        field: 'totalscore',
        headerName: 'คะแนนรวม400คะแนน',
        width: 170,
    },
    {
        field: 'percentagescore',
        headerName: 'คะแนนร้อยละ',
        width: 110,
    },
    {
        field: 'status',
        headerName: 'ผ่าน(ประเภท)/ไม่ผ่าน',
        width: 160,
    },
    {
        field: 'attribute',
        headerName: 'คุณลักษณะส่วนบุคคล(ค่าเฉลี่ย)',
        width: 210,
    },
    {
        field: 'studyhours',
        headerName: 'ชั่วโมงการศึกษา',
        width: 130,
    },
    {
        field: 'no',
        headerName: 'ลำดับที่สอบได้',
        width: 130,
    },
    {
        field: 'print',
        headerName: 'พิมพ์',
        width: 80,
        renderCell : (params)=>{
            return (
              <>
               <a href="/PagePrintStudyResults"><Print className="userListPrint" /></a> 
              </>
            )
          }
    }
]

const rows = [
    { id: 1, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.',course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 2, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 3, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 4, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 5, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 6, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก'  , affiliation:'สอ.ทอ.',course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 7, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 8, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 9, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 },
    { id: 10, studentid: 12470 ,  name: 'จ.อ. อาทิตย์ แสนโคก' , affiliation:'สอ.ทอ.' ,course1:50 ,course2:50 ,course3:50,course4:50,totalscore:200,percentagescore:50,status:'ผ่าน(ดีมาก)',attribute:'ผ่าน(70)',studyhours:'ผ่าน(80)',no:4 }
  
]
export default function TableStudyResultsTwo() {
  return(
<React.Fragment>
<div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
</div>
</React.Fragment>
  );
}
