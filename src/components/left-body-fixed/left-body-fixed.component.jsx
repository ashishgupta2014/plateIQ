import React from 'react';
import './left-body-fixed.styles.css';
import imageSrc from '../../invoices-image/02.png';

const Leftbodyfixed = () => (
    <div className="col-sm-6 col-2 h-100 text-white py-2 d-flex align-items-center justify-content-center fixed-top left_fixed_layout" id="left">
              <img src={imageSrc} className="img-fluid image" alt="Invoice Place holder"  />
    </div>
)

export default Leftbodyfixed