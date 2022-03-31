import React from 'react';
import Sidebar from '../components/Sidebar'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import InputEstimate from '../components/InputEstimate'

export default function PageEstimate() {
  return(
<React.Fragment>
<NavbarMain />
            <div className="containerMainPage">
                <Sidebar />
                <InputEstimate />
            </div>
                    <Footer />
</React.Fragment>
  );
}
