import React from "react";
import Link from '@mui/material/Link';
export default function NavbarMain() {
  return(
            <React.Fragment>
                 <div className="topbar">
               <div className="topbarWraper">
                    <div className="topLeft">
                        <span className="TextNavMain">ระบบสารสนเทศเพื่อการวัดและประเมินผลการศึกษา</span>
                    </div>
                    <div className="topRight">
                        <div className="NameUses">
                            <span className="NameUse">จ.อ.อาทิตย์  แสนโคก</span>
                            <span className="NameUse">ระดับผู้ใช้งาน กรรมวิธีส่วนกลาง</span>
                        </div>
                       
                        <Link href="/PageEducationInfo" variant="body2">  
                            <button  className="btnHome" type="submit">Home</button>
                        </Link>
                        <div className="topbarBtnContainer">
                        <Link href="/login" variant="body2">  
                            <button  className="btnLogout" type="submit">Logout</button>
                        </Link>
                        </div>
                    </div>
               </div>
            </div>
            </React.Fragment>
  );
}
