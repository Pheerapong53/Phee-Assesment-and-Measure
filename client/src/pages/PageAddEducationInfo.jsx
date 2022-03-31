import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import AddEducationInfo from '../components/AddEducationInfo'


export default function PageAddEducationInfo() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <AddEducationInfo />
            </div>
                    <Footer />
</React.Fragment>
  );
}
