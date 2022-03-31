import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Axios  from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
//import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddSubject() {

  //ตั้งค่า Dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [SubjectNr, setSubjectNr] = useState(0);
  const [SubjectName, setSubjectName] = useState("");
  const [SubjectCredit, setSubjectCredit] = useState(0);
  const [CourseId, setCourseId] = useState("");
  const addSubject = () => {
    Axios.post(('http://localhost:3001/AddSubject'), {
      
      SubjectNr: SubjectNr,
      SubjectName: SubjectName,
      SubjectCreditOrScore: SubjectCredit,
      CourseId: CourseId,
    }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <React.Fragment>
      <div className="cotainerDetail">
        <p className="HeadTextMain">เพิ่มรายวิชา</p>

        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="SubjectNr">หมวดวิชา</InputLabel>
          <OutlinedInput
            id="SubjectNr"
            label="หมวดวิชา"
            type="number"
            onChange={(event) => {
              setSubjectNr(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="SubjectName">ชื่อวิชา</InputLabel>
          <OutlinedInput
            id="SubjectName"
            label="ชื่อวิชา"
            onChange={(event) => {
              setSubjectName(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="SubjectCreditOrScore">
            หน่วยกิต/คะแนนเต็ม
          </InputLabel>
          <OutlinedInput
            id="SubjectCreditOrScore"
            label="หน่วยกิต/คะแนนเต็ม"
            type="number"
            onChange={(event) => {
              setSubjectCredit(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="CourseId">รหัสสถานศึกษา</InputLabel>
          <OutlinedInput
            id="CourseId"
            label="รหัสสถานศึกษา"
            onChange={(event) => {
              setCourseId(event.target.value);
            }}
          />
        </FormControl>

        <div className="containerBtnAddEdu">
          <a href="/PageSubject">
            <Button variant="outlined" sx={{ minWidth: 242, m: 1 }}>
              ย้อนกลับ
            </Button>
          </a>
          
            <Button
              variant="outlined"
              sx={{ minWidth: 242, m: 1 }}
              onClick={handleClickOpen}
            >
              บันทึก
            </Button>
           
        </div>
        <Dialog
              open={open}
              onClose={handleClose} 
              aria-labelledby="alert-dialog-title"              
            >
              <DialogTitle id="alert-dialog-title">
                {`คุณต้องการจะเพิ่ม วิชา ${SubjectName} ใช่หรือไม่ ?`}
              </DialogTitle>
              <DialogActions>
              <a href="/PageSubject">
                <Button 
                variant="contained"
                color="primary"
                onClick={()=> {
                addSubject();
                handleClose();
              }}> Yes </Button></a>
                <Button 
                variant="contained"
                color="error"
                onClick={handleClose}>
                  Cancel
                  </Button>
              </DialogActions>
            </Dialog>
      </div>
    </React.Fragment>
  );
}
