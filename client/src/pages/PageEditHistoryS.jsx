import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditHistoryS from '../components/EditHistoryS'

export default function PageEditHistory() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditHistoryS />
            </div>
                    <Footer />
</React.Fragment>
  );
}
