import React from 'react';
import './nav.styles.css';


const Nav = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="true" className="navbar-brand envelop_nav">
        <i className="fa fa-envelope custom_envelop_icon" aria-hidden="true"></i>DIRECT
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="dropdown">
                        <button className="dropbtn border dropdown-toggle">More</button>
                        <div className="dropdown-content">
                            <a href="true" ><span>Export</span></a>
                            <a href="true"><span>Mark as Exported</span></a>
                            <a href="true"><span>Setup Vendor</span></a>
                            <a href="true"><span >Flag Invoice</span><i className="fa fa-flag margin_148" aria-hidden="true"></i></a>
                            <a href="true"><span>Archive Invoice</span><i className="fa fa-archive margin_148" aria-hidden="true"></i></a>
                            <a href="true"><span className="color_red_highlight">Delete Invoice</span><i className="fa fa-trash margin_148 color_red_highlight" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="true" className="btn btn-primary nav-link approve" role="button" aria-pressed="true">Approve</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav;