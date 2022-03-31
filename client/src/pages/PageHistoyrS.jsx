import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import InputHistoryStu from '../components/InputHistoryStu'
import Footer from '../components/Footer'


export default function PageHistoyrS() {
  return(
    <React.Fragment>
        <NavbarMain />
            <div className="containerMainPage">
                <Sidebar />
                <InputHistoryStu />
            </div>
          <Footer />
    </React.Fragment>
  );
}
