import React, { Component } from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
  Row
} from 'react-bootstrap';

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        apt_name: '',
        street1: '',
        street2: '',
        city: '',
        zip: '',
        state: '',
        country: '',
        owner_name: '',
        phone: '',
        contact_hours: '',
        avatar_base: null
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error)
    });
  }

  fileChangeHandler(event){
    const file = event.target.files[0]
    this.getBase64(file).then( (fileString) => {
      const formState = Object.assign({}, this.state.form)
      formState.avatar_base = fileString
      this.setState({form: formState})
    })
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors && this.props.errors[attribute]){
      const errors = this.props.errors[attribute]
      if(errors){
        errorString = errors.join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again.
              </Alert>
            }
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="name-form-group"
              validationState={this.errorsFor('apt_name') && 'error'}>
              <ControlLabel id="apt_name">Name</ControlLabel>
              <FormControl
                type="text"
                name="apt_name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.apt_name} />
              {this.errorsFor('apt_name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('apt_name')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="street1">Address</ControlLabel>
              <FormControl
                type="text"
                name="street1"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.street1} />
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="street2">Apt or Unit</ControlLabel>
              <FormControl
                type="text"
                name="street2"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.street2} />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={3}>
            <FormGroup>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.city} />
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormGroup>
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
                type="text"
                name="state"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.state} />
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormGroup>
              <ControlLabel id="zip">Zipcode</ControlLabel>
              <FormControl
                type="text"
                name="zip"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.zip} />
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormGroup>
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl
                type="text"
                name="country"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.country} />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <FormGroup>
              <ControlLabel id="owner_name">Contact</ControlLabel>
              <FormControl
                type="text"
                name="owner_name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.owner_name} />
            </FormGroup>
          </Col>
          <Col xs={4}>
            <FormGroup>
              <ControlLabel id="phone">Phone</ControlLabel>
              <FormControl
                type="text"
                name="phone"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.phone} />
            </FormGroup>
          </Col>
          <Col xs={4}>
            <FormGroup>
              <ControlLabel id="contact_hours">Availability</ControlLabel>
              <FormControl
                type="text"
                name="contact_hours"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.contact_hours} />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="avatar">Image</ControlLabel>
              <input
                type="file"
                onChange={this.fileChangeHandler.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button id='submit' onClick={this.handleSubmit.bind(this)}>List Apartment</Button>
          </Col>
        </Row>
      </form>
    )
  }
}

export default NewApartment
