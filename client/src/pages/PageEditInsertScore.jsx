import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import EditPageInsertScore from '../components/EditPageInsertScore'

export default function PageEditInsertScore() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <EditPageInsertScore />
            </div>
                    <Footer />
</React.Fragment>
  );
}
