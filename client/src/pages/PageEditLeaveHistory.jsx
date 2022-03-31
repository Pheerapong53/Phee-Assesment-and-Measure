import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditLeaveHistory from '../components/EditLeaveHistory'

export default function PageEditLeaveHistory() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditLeaveHistory />
            </div>
                    <Footer />
</React.Fragment>
  );
}
