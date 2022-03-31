import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputInsertScore from '../components/InputInsertScore'

export default function PageInsertScore() {
  return(
<React.Fragment>
                <NavbarMain />
            <div className="containerMainPage">
                <Sidebar />
                <InputInsertScore />
            </div>
                    <Footer />
</React.Fragment>
  );
}
