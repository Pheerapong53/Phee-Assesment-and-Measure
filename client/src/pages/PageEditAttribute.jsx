import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputEditAttribute from '../components/InputEditAttribute'


export default function PageEditAttribute() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <InputEditAttribute />
            </div>
                    <Footer />
</React.Fragment>
  );
}
