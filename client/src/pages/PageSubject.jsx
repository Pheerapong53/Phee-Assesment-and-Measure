import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import TableSubject from '../components/TableSubject'


export default function PageSubject() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
               <TableSubject />
            </div>
                    <Footer />
</React.Fragment>
  );
}
