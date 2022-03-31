import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import AddPersonalAttributes from '../components/AddPersonalAttributes'

export default function PageAddPersonalAttributes() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <AddPersonalAttributes />
            </div>
                    <Footer />
</React.Fragment>
  );
}
