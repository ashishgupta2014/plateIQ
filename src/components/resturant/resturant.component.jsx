import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';


import './resturant.styles.css';
const Resturant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Container>
        <Row>
          <Collapse isOpen={isOpen}> 
            <Col  className="invoiceheaderfont"> 
              VENDOR
            </Col>
          </Collapse>
        </Row>
        <Row>
          <Col md="3"className="cheese">Freguesia Cheese</Col>
          <Col md="3"><div onClick={toggle}><i className={isOpen ? "fa fa-angle-up fa-2x" : "fa fa-angle-down fa-2x"} aria-hidden="true"></i></div></Col> 
        </Row>
          <Row>
          <Collapse isOpen={isOpen}>
            <Col className="invoicevendor"><i className="fa fa-check-circle" aria-hidden="true"></i> This vendor is mapped</Col>
          </Collapse>
          </Row>

        <Collapse isOpen={isOpen}>
          <Row className="invoice1">
                <Col md="3" className="invoiceheaderfont">INVOICE NO.</Col>
                <Col md="2" className="invoiceheaderfont">INVOICE TYPE</Col>
                <Col md="3" className="invoiceheaderfont">RESTAURANT</Col>
                <Col md="2" className="invoiceheaderfont">SUBTOTAL</Col>
                <Col md="2" className="invoicenumberfont">$13000.00</Col>
         
                <Col md="3" className="invoicevaluefont">00003526</Col>
                <Col md="2" className="invoicevaluefont">Receipt</Col>
                <Col md="3" className="invoicevaluefont">Monty's Cheese Shop</Col>
                <Col md="2" className="invoiceheaderfont">TAX</Col>
                <Col md="2" className="invoicenumberfont">$26.32</Col>
          </Row>
          <Row className="invoice2">
                <Col md="3" className="invoiceheaderfont">POSTING DATE</Col>
                <Col md="2" className="invoiceheaderfont">INVOICE DATE</Col>
                <Col md="3" className="invoiceheaderfont">DUE DATE</Col>
                <Col md="2" className="invoiceheaderfont">Total</Col>
                <Col md="2"></Col>
                <Col md="3" className="invoicevaluefont">Jul 14, 2017</Col>
                <Col md="2" className="invoicevaluefont">Jul 09, 2017</Col>
                <Col md="3" className="invoicevaluefont">Sep 09, 2017</Col>
                <Col md="2"></Col>
                <Col md="2" className="invoicevaluefont">$10,000.00</Col>
          </Row>
          <Row>
            <Col className="comment">
            <div >
              <i className="fa fa-comment fa-2x" aria-hidden="true"></i><span className="commenttext">Click to entre Memo</span>
            </div>
            </Col>
          </Row>
        </Collapse>
        <Collapse isOpen={!isOpen}>
          <Row>
                 <Col md="2" className="invoicevaluefont">00003526</Col>
                <Col md="2" className="invoicevaluefont">Jul 09, 2017</Col>
                <Col md="3" className="invoicevaluefont">Monty's Cheese Shop</Col>
                <Col md="3" className="invoiceheaderfont">Lorem Ipsum...</Col>

                <Col md="2"><span className="invoiceheaderfont">Total</span><span className="invoicevaluefont hightlightvalue">$10,000.00</span></Col>
          </Row>
        </Collapse>
      </Container>
    </div>
  );
}

export default Resturant;