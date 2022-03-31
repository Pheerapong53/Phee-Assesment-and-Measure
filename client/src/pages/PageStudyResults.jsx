import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputStudyResults from '../components/InputStudyResults'

export default function PageStudyResults() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
               <InputStudyResults />
            </div>
                    <Footer />
</React.Fragment>
  );
}
