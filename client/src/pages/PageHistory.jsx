import React from "react";
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import InputHistory from '../components/InputHistory'
import Footer from '../components/Footer'


export default function PageHistory() {
  return(
    <React.Fragment>
        <NavbarMain />
            <div className="containerMainPage">
                <Sidebar />
                <InputHistory />
            </div>
          <Footer />
    </React.Fragment>

  );
}
