import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputSummarize from '../components/InputSummarize'

export default function PageSummarize() {
  return(
<React.Fragment>
<NavbarMain />
<div className="containerMainPage">
                <Sidebar />
               <InputSummarize />
            </div>
                    <Footer />
</React.Fragment>
  );
}
