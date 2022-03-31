import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


export default function AddEducationInfo() {
  return(
<React.Fragment>
<div className="cotainerDetail">
            <p className="HeadTextMain">เพิ่มข้อมูลการศึกษา</p>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ปีการศึกษา</InputLabel>
                <OutlinedInput id="outlined" label="ปีการศึกษา"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">รุ่น</InputLabel>
                <OutlinedInput id="outlined" label="รุ่น"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ระยะเวลาการศึกษา</InputLabel>
                <OutlinedInput id="outlined" label="ระยะเวลาการศึกษา"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">วันที่เปิดหลักสูตร</InputLabel>
                <OutlinedInput id="outlined" label="วันที่เปิดหลักสูตร"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">วันที่จบหลักสูตร</InputLabel>
                <OutlinedInput id="outlined" label="วันที่จบหลักสูตร"/>
            </FormControl>
            <div className="containerBtnAddEdu">
                <a href="/PageEducationInfo"><Button variant="outlined" sx={{minWidth: 242, m:1  }}>ย้อนกลับ</Button></a>
                <a href="/PageEducationInfo"><Button variant="outlined" sx={{minWidth: 242, m:1  }}>บันทึก</Button></a>     
            </div>
           
        </div>
</React.Fragment>
  );
}
