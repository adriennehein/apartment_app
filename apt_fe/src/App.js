import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap';
import './App.css';
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: [
        {
          apt_name: 'Vintage Golden Hill',
          street1: '30th and B St',
          street2: '',
          city: 'San Diego',
          zip: '92102',
          state: 'CA',
          country: 'USA',
          owner_name: 'Michael McMichaelson',
          phone: '1234567890',
          contact_hours: 'Monday-Friday 8am-5pm'
        },
        {
          apt_name: 'North Park',
          street1: '20 Cockroach Ln',
          street2: '',
          city: 'San Diego',
          zip: '92104',
          state: 'CA',
          country: 'USA',
          owner_name: 'Greg Gregson',
          phone: '0987654321',
          contact_hours: 'Saturday and Sunday 1a-2pm'
        }
      ]
    }
  }

  newApartmentSubmit(apartment){
    console.log("This apartment was submitted", apartment)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/newapartment" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Apartment Listings
                    <Link to='/newapartment' id='new-apartment-link'>New Listing</Link>
                  </Col>
                  <Col xs={4}>
                    <small>
                      <Link to='/apartments' id='apartments-link'>See Apartments</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <NewApartment onSubmit={this.newApartmentSubmit.bind(this)} />
            </Grid>
          )} />


          <Route exact path="/apartments" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Apartment Listings
                    <small className='subtitle'>Available Apartments</small>
                  </Col>
                </Row>
              </PageHeader>
              <Apartments apartments={this.state.apartments} />
              <Col xs={4}>
                <small>
                  <Link to='/newapartment' id='new-apartment-link'>Add Apartment</Link>
                </small>
              </Col>
            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
