import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditSubject from '../components/EditSubject'

export default function PageEditSubject() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditSubject />
            </div>
                    <Footer />
</React.Fragment>
  );
}
