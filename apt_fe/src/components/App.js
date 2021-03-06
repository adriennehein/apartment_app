import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {
  Button,
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap';
import '../css/App.css';
import Apartments from '../pages/Apartments'
import NewApartment from '../pages/NewApartment'
import withAuth from './withAuth'
import AuthService from '../services/AuthService';
import fetch from 'isomorphic-fetch'

const Auth = new AuthService()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      apartments: [],
      newApartmentSuccess: false,
      errors: null,
      user: null
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

    const userId = Auth.getUserId()
    Auth.fetch(`http://localhost:3000/users/${userId}`).then( res => {
      this.setState({ user: res })
    })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login')
  }



  newApartmentSubmit(apartment){
    fetch(`${this.state.apiUrl}/apartments`,
        {
          body: JSON.stringify({apartment: apartment}),  // <- we need to stringify the json for fetch
          headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
          },
          method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
        }
      )
      .then((rawResponse)=>{
        // rawResponse.json() itself returns another promise, we we need to resolve it before continuingg
        return Promise.all([rawResponse.status, rawResponse.json()])
      })
      .then((parsedResponse) =>{
        if(parsedResponse[0] === 422){ // <- Check for any server side errors
          this.setState({errors: parsedResponse[1]})
        }else{
          const apartments = Object.assign([], this.state.apartments)
          apartments.push(parsedResponse[1]) // <- Add the new cat to our list of cats
          this.setState({
            apartments: apartments,  // <- Update cats in state
            errors: null, // <- Clear out any errors if they exist
            newApartmentSuccess: true
          })
        }
      })
    }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Apartment Listings
                    <br/>
                    <small className='subtitle'>Add New Listing</small>
                  </Col>
                </Row>
                <Row>
                  {this.state.user &&
                    <div>
                      <h2>Your Account</h2>
                      <h6>Name: {this.state.user.name}</h6>
                      <h6>Email: {this.state.user.email}</h6>

                      <h6>Your Roles</h6>
                      <ul>
                        {this.state.user.roles.map( role => {
                          return(
                            <li key={role.name}>{role.name}</li>
                          )
                        })}
                      </ul>
                    </div>
                  }
                </Row>
              </PageHeader>
              <NewApartment onSubmit={this.newApartmentSubmit.bind(this)} errors={this.state.errors} />

              {this.state.newApartmentSuccess &&
                <Redirect to="/apartments" />
              }
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
              {!this.state.newApartmentSuccess &&
                  <Redirect to='/' />
              }
            </Grid>
          )} />
          <Button className='form-submit' onClick={this.handleLogout.bind(this)}>Logout</Button>
        </div>
      </Router>
    );
  }
}

export default withAuth(App);
