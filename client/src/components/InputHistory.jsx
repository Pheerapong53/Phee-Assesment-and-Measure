import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


export default function InputHistory() {
  return(
    <React.Fragment>
        <div className="cotainerDetail">
            <p className="HeadTextMain">ทะเบียนประวัติ</p>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">เลขประจำตัวข้าราชการ</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ยศ</InputLabel>
                <OutlinedInput id="outlined" label="ยศ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ชื่อ</InputLabel>
                <OutlinedInput id="outlined" label="ชื่อ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">นามสกุล</InputLabel>
                <OutlinedInput id="outlined" label="นามสกุล"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ตำแหน่ง</InputLabel>
                <OutlinedInput id="outlined" label="ตำแหน่ง"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">สังกัด</InputLabel>
                <OutlinedInput id="outlined" label="สังกัด"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">Email Rtaf</InputLabel>
                <OutlinedInput id="outlined" label="Email Rtaf"/>
            </FormControl>
            <a href="/PageEditHistory"><Button variant="outlined" sx={{minWidth: 500, m:1  }}>แก้ไขประวัติ</Button></a>
        </div>
    </React.Fragment>
  );
}
