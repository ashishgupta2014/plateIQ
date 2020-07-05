import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ItemList from '../item-list/item-list.component';


import './item.styles.css'; 

const Item = () => {
  const [activeTab, setActiveTab] = useState('1');
  const itemsList = [{
    id: 1, name: "Guryere-greyezer", type: "Dairy4410-6680", quantity: 3, unit_price: "$1.00 Unit", total: "$328.07"
  },
  {id: 2, name: "Guryere-greyezer", type: "Dairy4410-6680", quantity: 3, unit_price: "$1.00 Unit", total: "$328.07"},
  {id: 3, name: "Guryere-greyezer", type: "Dairy4410-6680", quantity: 3, unit_price: "$1.00 Unit", total: "$328.07"}
  ]
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="containerstart">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            LineItems
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            History
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="rowheader">
            <Col md="5">
              Name
            </Col>
            <Col md="2">
              Quantity
            </Col>
            <Col md="2">
              Unit Price
            </Col>
            <Col md="3">
              Total
            </Col>
          </Row>
          {itemsList.map(row => (<ItemList key={row.id} row={row} />))}
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col >
              <Card body>
                <CardTitle className="historytitle">Recent Activity</CardTitle>
                <CardText>
                  <Row>
                    <Col md="4">
                      <div>
                        <b>Today</b>
                      </div>
                      <div className="time">
                        9.25AM
                      </div>
                    </Col>
                    
                    <Col md="1">
                      <div className="iconpadding">
                          <i className="fa fa-circle-o highlightflex" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col md="7">                   
                  
                          <div className="cont1 highlightflex">
                            Flagged by Jhone Doe 
                          </div>
                          <div className="clearBoth">
                            Lorem, ipsum dolor sit amet
                          </div>
                    </Col>
                  </Row>                  
                 
                </CardText>
              </Card>
            </Col>
            
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Item;