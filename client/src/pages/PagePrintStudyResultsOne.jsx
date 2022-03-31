import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import PrintStudyResultsOne from '../components/PrintStudyResultsOne'

export default function PagePrintStudyResultsOne() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                  <PrintStudyResultsOne />
            </div>
</React.Fragment>
  );
}
