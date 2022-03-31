import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputEducationInfo from '../components/InputEducationInfo'

export default function PageEducationInfo() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <InputEducationInfo />
            </div>
                    <Footer />
</React.Fragment>
  );
}
