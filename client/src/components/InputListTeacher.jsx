import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TableListTeacher from '../components/TableListTeacher'


export default function InputListTeacher() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">การวัด และประเมินผลการเรียน</p>
        <div className="DropdownSelectModel">
        <Box sx={{  display: 'flex', justifyContent: 'center' , flexDirection: 'row'} }>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select">หมวดวิชา</InputLabel>
                <Select defaultValue="" id="grouped-select" label="หมวดวิชา">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                    <MenuItem value={1} >หมวดวิชาที่ 1</MenuItem>
                    <MenuItem value={2} >หมวดวิชาที่ 2</MenuItem>
                    <MenuItem value={3} >หมวดวิชาที่ 3</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select">ชื่อวิชา</InputLabel>
                <Select defaultValue="" id="grouped-select" label="ชื่อวิชา">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                    <MenuItem value={1} >การติดต่อสื่อสาร</MenuItem>
                    <MenuItem value={2} >ความเป็นผู้นำและการบริหาร</MenuItem>
                    <MenuItem value={3} >ความมั่นคงแห่งชาติและการทหาร</MenuItem>
                    <MenuItem value={4} >ฝ่ายอำนวยการ</MenuItem>
                    <MenuItem value={5} >กิจกรรมพัฒนาความเป็นผู้นำ</MenuItem>
                </Select>
            </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select">รุ่น</InputLabel>
                <Select defaultValue="" id="grouped-select" label="รุ่น">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                    <MenuItem value={1} >85</MenuItem>
                    <MenuItem value={2} >86</MenuItem>
                    <MenuItem value={3} >87</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select">สัมมนา</InputLabel>
                <Select defaultValue="" id="grouped-select" label="สัมมนา">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                    <MenuItem value={1} >สัมมนา1</MenuItem>
                    <MenuItem value={2} >สัมมนา2</MenuItem>
                    <MenuItem value={3} >สัมมนา3</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" sx={{minWidth: 100, minHeight: 55 , m:1  }}>ตกลง</Button>
        </Box> 
        </div>
        
        <Container >
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: '100%'}} />
           <TableListTeacher />
        </Container>
        </div>
</React.Fragment>
  );
}
