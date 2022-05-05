
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../img/logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Axios from "axios";

//redux
import { useDispatch } from "react-redux";
import { addToCourse } from "../slices/courseSlice"; 


 export default function PageSelectSchool() {

  
  const dispatch = useDispatch();

  const server = "http://localhost:3001";
  const [CourseList, setCourseList] = useState([]);
  
  //รับค่าจากฐานข้อมูล
  useEffect(() => {
    Axios.get(`${server}/Academy`).then((response) => {
      setCourseList(response.data);
    });
  }, []);
  
  //รายชื่อสถานศึกษา
  const nameAcademy = CourseList.map((a) => a.Academy);
  const uniqAcademy = Array.from(new Set(nameAcademy));
  
  //เลือกสถานศึกษา
  const [SelectAcademy, setSelectAcademy] = useState([]);
  const handleSelectAcademy = (Academy) => {
    setSelectAcademy(
      CourseList.filter((val) => {
        return val.Academy == Academy;
      })
    );
  };
 
  //เลือกหลักสูตร
  const [SelectCourse, setSelectCourse] = useState([]);
  const handleSelectCourseName = (CourseId) => {
    setSelectCourse(
      CourseList.filter((val) => {
        return val.CourseId == CourseId;
      })
    );
  };
  

  //console.log(nameAcademy);
  //console.log(uniqAcademy);
  //console.log(SelectAcademy);
  //console.log(SelectCourse);
  
  return (
    <React.Fragment>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        
        <img src={Logo} alt="logo" className="logoLogin" />
        <p className="HeadTextShcool">ส่วนการศึกษา</p>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 500 }}>
            <InputLabel htmlFor="Academy">สถานศึกษา</InputLabel>
            <Select
              defaultValue=""
              id="Academy"
              label="สถานศึกษา"
              onChange={(event) => {
                handleSelectAcademy(event.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqAcademy.map((Academy,i) => (
                <MenuItem value={Academy} key={i}>
                  {Academy}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 500 }}>
            <InputLabel htmlFor="CourseName">หลักสูตร</InputLabel>
            <Select
              defaultValue=""
              id="CourseName"
              label="หลักสูตร"
              onChange={(event) => {
                handleSelectCourseName(event.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {SelectAcademy.map((a,i) => (
                <MenuItem value={a.CourseId} key={i}>
                  {a.CourseName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <a href="/login">
        <Button
          variant="outlined"
          sx={{ minWidth: 500 }}
          onClick={() => dispatch(addToCourse(SelectCourse[0]))}
        >
          ตกลง
        </Button>
        </a>
      </Box>
    </React.Fragment>
  );
}

