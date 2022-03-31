import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputListTeacher from '../components/InputListTeacher'


export default function PageListTeacher() {
  return(
<React.Fragment>
<NavbarMain />
            <div className="containerMainPage">
                <Sidebar />
                <InputListTeacher />
            </div>
                    <Footer />
</React.Fragment>
  );
}
