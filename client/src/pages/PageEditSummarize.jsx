import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditPageSummarize from '../components/EditPageSummarize'


export default function PageEditSummarize() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditPageSummarize />
            </div>
                    <Footer />
</React.Fragment>

  );
}
