import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputAttribute from '../components/InputAttribute'

export default function PageAttribute() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <InputAttribute />
            </div>
                    <Footer />
</React.Fragment>
  );
}
