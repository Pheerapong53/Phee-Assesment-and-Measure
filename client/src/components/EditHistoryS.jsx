import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


export default function EditHistoryS() {
  return(
<React.Fragment>
<div className="cotainerDetail">
            <p className="HeadTextMain">แก้ไขประวัติ นทน.</p>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">เลขประจำตัว</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัว"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">สัมมนา</InputLabel>
                <OutlinedInput id="outlined" label="สัมมนา"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">เลขประจำตัวข้าราชการ</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ยศ</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ชื่อ</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">นามสกุล</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">ตำแหน่ง</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">สังกัด</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">Email Rtaf</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <a href="/PageHistoyrS"><Button variant="outlined" sx={{minWidth: 500, m:1  }}>บันทึก</Button></a>
        </div>
</React.Fragment>
  );
}
