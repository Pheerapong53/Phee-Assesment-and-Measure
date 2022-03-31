import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import AddSubject from '../components/AddSubject'


export default function PageAddSubject() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <AddSubject />
            </div>
                    <Footer />
</React.Fragment>
  );
}
