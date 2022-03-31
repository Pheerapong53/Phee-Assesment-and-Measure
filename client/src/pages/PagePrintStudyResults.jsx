import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import PrintStudyResults from '../components/PrintStudyResults'


export default function PagePrintStudyResults() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                  <PrintStudyResults />
            </div>
</React.Fragment>
  );
}
