import React from 'react'
import {Settings , Report ,AccountBox ,SignalCellularAlt,AccessTime,Group,HowToReg,MenuBook} from '@material-ui/icons'
import { Link } from "react-router-dom";
import Logo from '../img/logo.png'




export default function Sidebar()  {
    

    
        return (
            <React.Fragment>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <div className="imgSidebar">
                            <img src={Logo} alt="logo" className="logoSidebar" />
                        </div>
                        <div className="containerTextTitleSidebar">
                            <p className="sidebarTitle">สถานศึกษา โรงเรียนxxxx</p>
                            <p className="sidebarTitle">หลักสูตร xxxx</p>
                        </div>
                       
                        <ul className="sidebarList">

                        <Link to="/PageHistory" className="link">
                            <li className="sidebarListItem ">
                                <AccountBox className="sidebarIcon" />
                                ทะเบียนประวัติผู้ใช้
                            </li>
                            <hr />
                        </Link>

                        <Link to="/PageHistoyrS" className="link">
                            <li className="sidebarListItem ">
                                <AccountBox className="sidebarIcon" />
                                ทะเบียนประวัติผู้เข้ารับการศึกษา
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageInsertScore" className="link">
                            <li className="sidebarListItem">
                                <AccessTime className="sidebarIcon" />
                                ชั่วโมงการศึกษา และคะแนนความประพฤติ
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageEstimate" className="link">
                            <li className="sidebarListItem">
                                <HowToReg className="sidebarIcon" />
                               การวัด และประเมินผลการเรียน
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageAttribute" className="link">
                            <li className="sidebarListItem">
                                <HowToReg className="sidebarIcon" />
                               การวัด และประเมินคุณลักษณะส่วนบุคคล
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageSummarize" className="link">
                            <li className="sidebarListItem">
                                <SignalCellularAlt className="sidebarIcon" />
                               ผลการศึกษาสรุปรวม
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageStudyResults" className="link">
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon" />
                               รายงานผลการศึกษา
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageSubject" className="link">
                            <li className="sidebarListItem">
                                <MenuBook className="sidebarIcon" />
                               หมวดวิชาของสถานศึกษา
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PagePersonalAttributes" className="link">
                        <li className="sidebarListItem">
                                <Group className="sidebarIcon" />
                               คุณลักษณะส่วนบุคคลทั้งหมด
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageListTeacher" className="link">
                            <li className="sidebarListItem">
                                <Group className="sidebarIcon" />
                               รายชื่ออาจารย์
                            </li>
                            <hr />
                        </Link>
                        <Link to="/PageManage" className="link">
                        <li className="sidebarListItem">
                                <Settings className="sidebarIcon" />
                               จัดกานสมาชิก
                            </li>
                            <hr />
                        </Link>
                        </ul>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    
}