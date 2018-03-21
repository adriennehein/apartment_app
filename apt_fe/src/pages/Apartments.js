import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';

class Apartments extends Component {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.apartments.map((apartment, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='apartment-name'>
                        {apartment.apt_name}
                      </span>
                      - <small className='apartment-street1'>Located at: {apartment.street1}</small>
                    </h4>
                  }>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Apartments;
