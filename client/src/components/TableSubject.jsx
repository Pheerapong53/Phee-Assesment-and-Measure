import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function TableSubject() {
  const columns = [
    { field: "SubjectNr", headerName: "หมวดวิชาที่", width: 300 },
    { field: "SubjectName", headerName: "ชื่อวิชา", width: 300 },
    {
      field: "SubjectCreditOrScore",
      headerName: "หน่วยกิต/คะแนนเต็ม",
      width: 300,
    },
    {
      field: "action",
      headerName: "การจัดการ",
      width: 250,
      renderCell: (SubjectList) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => {
                toEditSubject(SubjectList);
              }}
            >
              Edit
            </button>

            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                handleClickOpen();
                SetCurrentSubject({
                  id: SubjectList.row.id,
                  name: SubjectList.row.SubjectName,
                });
              }}
            />
          </>
        );
      },
    },
  ];

  //ตั้งค่า Dialog Delete
  const [currentSubject, SetCurrentSubject] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //ตั้งค่า Dialog ระยะเวลาการศึกษา
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  //ลบObjectผ่าน URL
  const toDeleteSubject = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setSubjectList(
        SubjectList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  //ส่งObjectผ่าน URL
  const navigate = useNavigate();
  const toEditSubject = (clickedSubject) => {
    navigate("/PageEditSubject", {
      state: {
        id: clickedSubject.row.id,
        SubjectNr: clickedSubject.row.SubjectNr,
        SubjectName: clickedSubject.row.SubjectName,
        SubjectCreditOrScore: clickedSubject.row.SubjectCreditOrScore,
      },
    });
  };

  //รายวิชาแสดงตาราง
  const [SubjectList, setSubjectList] = useState([]);
  const [search, setSearch] = useState("");
  //รับค่าจากฐานข้อมูล
  useEffect(() => {
    Axios.get("http://localhost:3001/TableSubject").then((response) => {
      setSubjectList(response.data);
    });
  }, []);

  //รับค่าชั่วโมงการศึกษา
  const [CourseHrs, setCourseHrs] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/PmeCourse").then((response) => {
      setCourseHrs(response.data[0].Hrs);
    });
  }, []);

  //แก้ไขชั่วโมงการศึกษา
  const UpdateCourseHrs = () => {
    Axios.put(('http://localhost:3001/UpdateCourseHrs'), {
      CourseHrs: CourseHrs
    }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <React.Fragment>
      <div className="cotainerDetail">
        <p className="HeadTextMain">หมวดวิชาของสถานศึกษา</p>
        <Container>
          <div style={{ height: 400, width: "100%" }}>
            <div className="ContainerInputSubject">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ width: "100%" }}
                placeholder="ค้นหารายวิชา"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <a href="/PageAddSubject">
                <Button
                  variant="outlined"
                  sx={{ height: 55 }}
                  startIcon={<AddIcon />}
                >
                  เพิ่ม
                </Button>
              </a>
            </div>

            <DataGrid
              rows={SubjectList.filter((val) => {
                if (search == "") {
                  return val;
                } else if (val.SubjectName.includes(search)) {
                  return val;
                }
              })}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
            />

            {/*Dialog Delete*/}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
            >
              <DialogTitle id="alert-dialog-title">
                {`คุณต้องการจะลบ วิชา ${currentSubject.name} ใช่หรือไม่ ?`}
              </DialogTitle>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    toDeleteSubject(currentSubject.id);
                    handleClose();
                  }}
                >
                  Yes
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>

            {/*Dialog ระยะเวลาการศึกษา*/}
            <Dialog
              open={open1}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
            >
              <DialogTitle id="alert-dialog-title">
                {`คุณต้องการจะแก้ไขชั่วโมงการศึกษาใช่หรือไม่ ?`}
              </DialogTitle>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    UpdateCourseHrs();
                    handleClose1();
                  }}
                >
                  {" "}
                  Yes{" "}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose1}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>

            <div className="ContainerTableSubject">
              <div className="subject">
                <p>ระยะเวลาการศึกษา</p>
              </div>
              <div className="subject">
                <input
                  class="form-control"
                  value={CourseHrs}
                  onChange={(event) => {
                    setCourseHrs(event.target.value);
                  }}
                />
              </div>
              <div className="subject">
                <p>ชั่วโมง</p>
              </div>

              <Button
                variant="contained"
                color="primary"
                sx={{ minWidth: 50, mx: 1 }}
                onClick={handleClickOpen1}
              >
                บันทึก
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
