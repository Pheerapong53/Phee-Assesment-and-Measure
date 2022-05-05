import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import TableSubject from "../components/TableSubject";
//import { useSelector } from "react-redux";

export default function PageSubject() {
  //const CourseId = useSelector((state) => state.course.CourseId);
  return (
    <React.Fragment>
      <NavbarMain />
      <div className="containerMainPage">
        
        <Sidebar />
        <TableSubject />
      </div>
      <Footer />
    </React.Fragment>
  );
}
