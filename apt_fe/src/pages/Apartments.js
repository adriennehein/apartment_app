import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';

class Apartments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      apartments: []
    }
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/apartments`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse)=>{
      this.setState({apartments: parsedResponse})
    })
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.state.apartments.map((apartment, index) =>{
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
