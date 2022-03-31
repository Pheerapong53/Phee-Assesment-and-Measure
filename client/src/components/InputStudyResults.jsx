import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TableStudyResultsOne from './TableStudyResultsOne'
import TableStudyResultsTwo from './TableStudyResultsTwo'

export default function InputStudyResults() {
  return(
<React.Fragment>
<div className="cotainerDetail">
        <p className="HeadTextMain">รายงานผลการศึกษา</p>
        <div className="DropdownSelectModel">
        <Box sx={{  display: 'flex', justifyContent: 'center' , flexDirection: 'row'} }>
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
            <h3>ผนวก ข (แบบ ร้อยละ)</h3>
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: '100%'}}   />
           <TableStudyResultsOne />
        </Container>
        <Container >
            <h3>ผนวก ค (แบบ เกรด)</h3>
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: '100%'}}   />
           <TableStudyResultsTwo />
        </Container>
        </div>
</React.Fragment>
  );
}
