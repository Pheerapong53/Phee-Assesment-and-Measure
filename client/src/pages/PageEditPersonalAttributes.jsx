import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditPersonalAttributes from '../components/EditPersonalAttributes'

export default function PageEditPersonalAttributes() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditPersonalAttributes />
            </div>
                    <Footer />
</React.Fragment>
  );
}
