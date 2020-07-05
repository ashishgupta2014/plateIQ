import React from 'react';
import './right-body.styles.css';

import Nav from '../nav/nav.component'
import Resturant from '../resturant/resturant.component'
import Item from '../items/item.component';



const Rightbody = () => (
    <div className="col offset-2 offset-sm-6 py-2">
        <Nav />
        <Resturant />
        <Item />
    </div>
)

export default Rightbody;