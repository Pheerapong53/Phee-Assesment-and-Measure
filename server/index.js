const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//เชื่อมต่อDatabase
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "measurementandevaluation",
});

{/*เลือกสถานศึกษา*/ }
//รับสถานศึกษาจาก tbpmecourse
app.get("/Academy", (req, res) => {
  const sqlSelect =
    "SELECT CourseId,CourseName,Academy FROM tbpmecourse";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


{/*หมวดวิชาของสถานศึกษา*/}
//รับค่าวิชาของสถานศึกษาจาก tbcoursesubjects
app.get("/TableSubject", (req, res) => {
  const sqlSelect =
    "SELECT SubjectId AS id,SubjectNr,SubjectName,SubjectCreditOrScore FROM tbcoursesubjects WHERE CourseId = 011";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//เพิ่มรายวิชาของสถานศึกษา
app.post("/AddSubject", (req, res) => {
  const sqlInsert = 
    "INSERT INTO tbcoursesubjects (SubjectId,SubjectNr,SubjectName,SubjectCreditOrScore,CourseId) VALUES(?,?,?,?,?)";
  const SubjectNr = req.body.SubjectNr;
  const SubjectName = req.body.SubjectName;
  const SubjectCreditOrScore = req.body.SubjectCreditOrScore;
  const CourseId = req.body.CourseId;
  db.query(
    sqlInsert,
    [`${CourseId}-${SubjectNr}`, SubjectNr, SubjectName, SubjectCreditOrScore, CourseId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//แก้ไขรายวิชาของสถานศึกษา
app.put("/EditSubject", (req, res) => {
  const sqlUpdate =
  "UPDATE tbcoursesubjects SET SubjectNr = ?,SubjectName = ?,SubjectCreditOrScore=? WHERE SubjectId=? ";
  const SubjectId = req.body.SubjectId;
  const SubjectNr = req.body.SubjectNr;
  const SubjectName = req.body.SubjectName;
  const SubjectCreditOrScore = req.body.SubjectCreditOrScore;
  db.query(
    sqlUpdate,[SubjectNr, SubjectName, SubjectCreditOrScore,SubjectId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//ลบรายวิชาของสถานศึกษา
app.delete('/delete/:id',(req,res)=> {
  const id = req.params.id;
  db.query("DELETE FROM tbcoursesubjects WHERE SubjectId = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

{/*ชั่วโมงการศึกษา*/}
//รับค่าชั่วโมงการศึกษาของหลักสูตรจาก tbpmecourse
app.get("/PmeCourse", (req, res) => {
  const sqlSelect =
    "SELECT CourseTotalHrs AS Hrs FROM tbpmecourse WHERE CourseId = 011";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//แก้ไขชั่วโมงการศึกษาของหลักสูตร
app.put("/UpdateCourseHrs", (req, res) => {
  const sqlUpdate =
  "UPDATE tbpmecourse SET CourseTotalHrs = ? WHERE CourseId=011 ";
  const CourseHrs = req.body.CourseHrs;
  db.query(
    sqlUpdate,[CourseHrs],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


{/*คุณลักษณะส่วนบุคคล*/}
//รับค่าคุณลักษณะส่วนบุคคลจาก tbpersattrcategory
app.get("/TableAttr", (req, res) => {
  const sqlSelect =
    "SELECT PerAttrCatId AS id,PersAttrCatName,PersAttrCatFullscore FROM tbpersattrcategory";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//เพิ่มค่าคุณลักษณะส่วนบุคคล
app.post("/AddAttr", (req, res) => {
  const sqlInsert = 
    "INSERT INTO tbpersattrcategory (PerAttrCatId,PersAttrCatName,PersAttrCatFullscore) VALUES(?,?,?)";
  
  const PerAttrCatId = req.body.PerAttrCatId;
  const PersAttrCatName = req.body.PersAttrCatName;
  const PersAttrCatFullscore = req.body.PersAttrCatFullscore;

  db.query(
    sqlInsert,
    [PerAttrCatId, PersAttrCatName, PersAttrCatFullscore],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//แก้ไขคุณลักษณะส่วนบุคคล
app.put("/EditAttr", (req, res) => {
  const sqlUpdate =
  "UPDATE tbpersattrcategory SET PersAttrCatName = ?,PersAttrCatFullscore = ? WHERE PerAttrCatId=? ";
  const PerAttrCatId = req.body.PerAttrCatId;
  const PersAttrCatName = req.body.PersAttrCatName;
  const PersAttrCatFullscore = req.body.PersAttrCatFullscore;
  db.query(
    sqlUpdate,[PersAttrCatName, PersAttrCatFullscore, PerAttrCatId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//ลบคุณลักษณะส่วนบุคคล
app.delete('/deleteAttr/:id',(req,res)=> {
  const id = req.params.id;
  db.query("DELETE FROM tbpersattrcategory WHERE PerAttrCatId=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.listen("3001", () => {
  console.log("Running on port 3001");
});
