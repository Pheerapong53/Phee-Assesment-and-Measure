import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import TablePersonalAttributes from '../components/TablePersonalAttributes'


export default function PagePersonalAttributes() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <TablePersonalAttributes />
            </div>
                    <Footer />
</React.Fragment>
  );
}
