import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddPersonalAttributes() {
  //ตั้งค่า Dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [PerAttrCatId, setPerAttrCatId] = useState(0);
  const [PersAttrCatName, setPersAttrCatName] = useState("");
  const [PersAttrCatFullscore, setPersAttrCatFullscore] = useState(0);

  const addAttr = () => {
    Axios.post("http://localhost:3001/AddAttr", {
      PerAttrCatId: PerAttrCatId,
      PersAttrCatName: PersAttrCatName,
      PersAttrCatFullscore: PersAttrCatFullscore,
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <React.Fragment>
      <div className="cotainerDetail">
        <p className="HeadTextMain">เพิ่มคุณลักษณะส่วนบุคคล</p>

        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="PerAttrCatId">รหัสด้านการประเมิน</InputLabel>
          <OutlinedInput
            required
            id="PerAttsCatId"
            label="รหัสด้านการประเมิน"
            onChange={(event) => {
              setPerAttrCatId(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="PersAttrCatName">
            ชื่อคุณลักษณะส่วนบุคคล
          </InputLabel>
          <OutlinedInput
            id="PersAttrCatName"
            label="ชื่อคุณลักษณะส่วนบุคคล"
            onChange={(event) => {
              setPersAttrCatName(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
          <InputLabel htmlFor="PersAttrCatFullscore">คะแนนเต็ม</InputLabel>
          <OutlinedInput
            id="PersAttrCatFullscore"
            label="คะแนนเต็ม"
            type="number"
            onChange={(event) => {
              setPersAttrCatFullscore(event.target.value);
            }}
          />
        </FormControl>

        <div className="containerBtnAddEdu">
          <a href="/PagePersonalAttributes">
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
                {`คุณต้องการจะเพิ่มคุณลักษณะด้าน ${PersAttrCatName} ใช่หรือไม่ ?`}
              </DialogTitle>
              <DialogActions>
              <a href="/PagePersonalAttributes">
                <Button 
                variant="contained"
                color="primary"
                onClick={()=> {
                addAttr();
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
