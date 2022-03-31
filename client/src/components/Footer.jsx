import React from 'react';

export default function Footer() {
   
  return(
    <React.Fragment>
       <footer>
            <div className="footer-content">
                <h3>พัฒนาโดย กมซ.ศซว.ทอ.</h3>
                <p>copyright &copy;{new Date().getFullYear()}  designed by Arthit S.</p>
            </div>
        </footer>
    </React.Fragment>

  );
}
