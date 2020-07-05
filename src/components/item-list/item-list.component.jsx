import React from 'react';

import { Row, Col } from 'reactstrap';

import './item-list.styles.css';


const ItemList = (props) => (
    <Row className="listrow">
        <Col md="5">
            <p className="title">{props.row.name}</p>
            <p className="subtitle">{props.row.type}</p>
        </Col>
        <Col md="2" className="quantity">
            {props.row.quantity}
        </Col>
        <Col md="2">
            {props.row.unit_price}
        </Col>
        <Col md="3">
            {props.row.total}
        </Col>
    </Row>
)

export default ItemList;