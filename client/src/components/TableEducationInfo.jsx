import React from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import {Edit} from '@material-ui/icons';


const columns = [
    { field: 'no', headerName: 'ลำดับ', width: 70 },
    { field: 'yeareducation', headerName: 'ปีการศึกษา', width: 100 },
    { field: 'modeleducation', headerName: 'รุ่น', width: 50 },
    {field: 'studyperiod',headerName: 'ระยะเวลาการศึกษา',width: 140,},
    {field: 'openingday',headerName: 'วันที่เปิดหลักสูตร',width: 130,},
    {field: 'closingday',headerName: 'วันที่จบหลักสูตร',width: 130,},
    {field: 'numberofpartic',headerName: 'จำนวนผู้เข้ารับการศึกษา',width: 170,},
    {field: 'numberofgraduates',headerName: 'จำนวนผู้สำเร็จการศึกษา',width: 170,},
    
    {
        field: 'edit',
        headerName: 'แก้ไข/ประเมินผลการเรียน',
        width: 180,
        renderCell : (params)=>{
            return (
              <>
               <a href="/PageEditEducationInfo"><Edit className="userListDate" /></a>
              </>
            )
          }
    },
]

const rows = [
    { id: 1,no:1 ,yeareducation:2563 ,modeleducation:84 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143 },
    { id: 2,no:2 , yeareducation:2563 ,modeleducation:85 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 3,no:3 , yeareducation:2563 ,modeleducation:86 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 4,no:4 , yeareducation:2563 ,modeleducation:87 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 5,no:5 , yeareducation:2563 ,modeleducation:88 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 6,no:6 , yeareducation:2563 ,modeleducation:89 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143 },
    { id: 7,no:7 ,  yeareducation:2563 ,modeleducation:90 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143 },
    { id: 8,no:8 , yeareducation:2563 ,modeleducation:91 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 9,no:9 , yeareducation:2563 ,modeleducation:92 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143  },
    { id: 10,no:10 , yeareducation:2563 ,modeleducation:93 , studyperiod : 13 , openingday: '27 ต.ค. 63',closingday : '29 ม.ค. 64' ,numberofpartic:144 ,numberofgraduates:143 }
  
]

export default function TableEducationInfo() {

  return(
<React.Fragment>

    <div style={{ height: 700, width: '100%' }}>
    <a href="/PageAddEducationInfo"><Button variant="outlined" startIcon={<AddIcon />}>เพิ่ม</Button></a>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
    </div>
</React.Fragment>
  );
}
