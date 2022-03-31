import React from 'react';
import Logo from '../img/logo.png'
import InputLogin from '../components/InputLogin'
import ButtonRegister from '../components/ฺButtonRegister'
import Button from '@mui/material/Button';
import NavbarLogin from '../components/NavbarLogin'


export default function PageLogin() {
  return(
    <React.Fragment>
            <NavbarLogin />
            <div className="containerPageLogin">
                <div className="containerLogin">
                        <img src={Logo} alt="logo" className="logoLogin" />
                        <p className="HeadTextLogin">ระบบสารสนเทศเพื่อการวัดและประเมินผลการศึกษา</p>
                        <InputLogin/>
                        <a href="/PageEducationInfo"><Button variant="outlined" sx={{minWidth: 500 }}>เข้าสู่ระบบ</Button></a>
                        <ButtonRegister />
                        <p>ติดต่อสอบถามผู้ดูแลระบบ: 12345</p>
                </div>
            </div>
    </React.Fragment>
  );
}
