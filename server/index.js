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

//รับค่าจากDatabase,รับค่า CourseId จาก Log In Page
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

//รับค่าชั่วโมงการศึกษา, รับค่า CourseId จาก Log In Page
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

//Update CourseHrs
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


//รับค่าจากAddSubject
app.post("/AddSubject", (req, res) => {
  const sqlInsert = 
    "INSERT INTO tbcoursesubjects (SubjectId,SubjectNr,SubjectName,SubjectCreditOrScore,CourseId) VALUES(?,?,?,?,?)";
  //const SubjectId = req.body.SubjectId;
  const SubjectNr = req.body.SubjectNr;
  const SubjectName = req.body.SubjectName;
  const SubjectCreditOrScore = req.body.SubjectCreditOrScore;
  const CourseId = req.body.CourseId;
  //const SubjectId = `${CourseId}-${SubjectNr}`;
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

//EditSubject
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

//delete
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

//รับค่า AttrPersonnel จาก Database
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

//เพิ่ม AttrPersonnel
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

//Edit AttrPersonnel
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

//deleteAttr
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
