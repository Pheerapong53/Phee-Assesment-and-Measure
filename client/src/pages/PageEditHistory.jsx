import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditHistory from '../components/EditHistory'

export default function PageEditHistory() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditHistory />
            </div>
                    <Footer />
</React.Fragment>
  );
}
