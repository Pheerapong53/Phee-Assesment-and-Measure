import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditEducationInfo from '../components/EditEducationInfo'

export default function PageEditEducationInfo() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditEducationInfo />
            </div>
                    <Footer />
</React.Fragment>
  );
}
