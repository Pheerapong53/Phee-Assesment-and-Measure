import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import PrintHistoyrs from '../components/PrintHistoyrs'


export default function PagePrintHistoyrs() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <PrintHistoyrs />
            </div>
                    <Footer />
</React.Fragment>
  );
}
