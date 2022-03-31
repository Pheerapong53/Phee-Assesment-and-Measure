import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputManage from '../components/InputManage'


export default function PageManage() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
                <InputManage />
            </div>
                    <Footer />
</React.Fragment>
  );
}
