import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonRegisTeacher from '../components/ButtonRegisTeacher';


export default function PageTeaCher() {

  const Ranks = [
    ' นาย',
    ' นาง',
    ' จ.ต.',
    ' จ.ต.หญิง',
   ' จ.ท.',
     'จ.ท.หญิง',
   ' จ.อ.',
     'จ.อ.หญิง',
     'พ.อ.ต.',
   ' พ.อ.ต.หญิง',
    ' พ.อ.ท.',
    ' พ.อ.ท.หญิง',
    'พ.อ.อ.',
   ' พ.อ.อ.หญิง',
    ' ร.ต.',
   ' ร.ต.หญิง',
   ' ร.ท.',
    'ร.ท.หญิง',
     'ร.อ.',
   ' ร.อ.หญิง',
     'น.ต.',
     'น.ต.หญิง',
   ' น.ท.',
   ' น.ท.หญิง',
   ' น.อ.',
   ' น.อ.หญิง',
     'พล.อ.ต.',
    'พล.อ.ต.หญิง',
     'พล.อ.ท.',
     'พล.อ.ท.หญิง',
   ' พล.อ.อ.',
     'พล.อ.อ.หญิง',
   ];
   const Companys = [
    'ศบพ.',
   'ศฮพ.',
   'ศกอ.',
   'สพร.ทอ.',
   'สคม.ทอ.',
   'สลก.ทอ.',
    'สบ.ทอ.',
    'กพ.ทอ.',
   ' ขว.ทอ.',
    'ยก.ทอ.',
    'กบ.ทอ.',
   ' กร.ทอ.',
    'ทสส.ทอ.',
    'สปช.ทอ.',
    'กง.ทอ.',
    'จร.ทอ.',
   ' สตน.ทอ.',
   ' สนภ.ทอ.',
    'สธน.ทอ.',
    'ศซบ.ทอ.',
   ' สบน.ทอ.',
    'คปอ.ทอ.',
    'อย.',
    'รร.การบิน',
    'บน.1',
    'บน.2',
    'บน.3',
   ' บน.4',
    'บน.5',
    'บน.7',
   ' บน.6',
    'บน.23',
    'บน.21',
    'บน.41',
    'บน.46',
   ' บน.56',
    'ศปอว.ทอ.',
    'พธ.ทอ.',
   ' ชอ.',
   ' สอ.ทอ.',
  '  สพ.ทอ.',
    'พอ.',
    'ขส.ทอ.',
   ' ชย.ทอ.',
   ' ศซว.ทอ.',
   ' ยศ.ทอ.',
   ' รร.นนก.',
    'ศวอ.ทอ.',
   ' สก.ทอ.',
    'สน.ผบ.ดม.',
    'สวบ.ทอ.',
]

  return(
    <React.Fragment>
        <Box sx={{  display: 'flex' ,justifyContent: 'center' , alignItems: 'center',flexDirection: 'column' , minHeight:'100vh'} }>
            <p className="HeadTextRegis">สมัครสมาชิกสำหรับ อาจารย์</p>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">เลขประจำตัวข้าราชการ</InputLabel>
                <OutlinedInput id="outlined" label="เลขประจำตัวข้าราชการ"/>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 500 }}>
                <InputLabel htmlFor="grouped-select">ยศ</InputLabel>
                <Select defaultValue="" id="grouped-select" label="ยศ">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    Ranks.map((Rank)=>(
                        <MenuItem value={Rank} key={Rank}>{Rank}</MenuItem>

                    ))
                }
                </Select>
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
                <InputLabel htmlFor="outlined">ตำแหน่งปัจจุบัน</InputLabel>
                <OutlinedInput id="outlined" label="ตำแหน่งปัจจุบัน"/>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 500 }}>
                <InputLabel htmlFor="grouped-select">สังกัด</InputLabel>
                <Select defaultValue="" id="grouped-select" label="สังกัด">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    Companys.map((Company)=>(
                        <MenuItem value={Company} key={Company}>{Company}</MenuItem>

                    ))
                }
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                <InputLabel htmlFor="outlined">Email Rtaf</InputLabel>
                <OutlinedInput id="outlined" label="Email Rtaf"/>
            </FormControl>
            <ButtonRegisTeacher />
        </Box>
    </React.Fragment>

  );
}
