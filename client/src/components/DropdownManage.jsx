import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function DropdownManage() {
    const [level, setLevel] = React.useState('');

    const handleChange = (event) => {
        setLevel(event.target.value);
    };
  return(
<React.Fragment>
<FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={level}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>รออนุมัติ</MenuItem>
          <MenuItem value={2}>วัดผลส่วนกลาง</MenuItem>
          <MenuItem value={3}>กรรมวิธีส่วนกลาง</MenuItem>
          <MenuItem value={4}>ผอ.</MenuItem>
          <MenuItem value={5}>กรรมวิธี</MenuItem>
          <MenuItem value={6}>วัดผล</MenuItem>
          <MenuItem value={7}>ปกครอง</MenuItem>
          <MenuItem value={8}>อาจารย์ประจำหมวดวิชา</MenuItem>
          <MenuItem value={9}>นทน.</MenuItem>
        </Select>
      </FormControl>
</React.Fragment>
  );
}
