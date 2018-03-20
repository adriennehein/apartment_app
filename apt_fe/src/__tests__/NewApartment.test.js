import React from 'react';
import ReactDOM from 'react-dom';
import NewApartment from '../pages/NewApartment';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing',() => {
  const div = document.createElement('div')
  ReactDOM.render(<NewApartment />, div)
})

it('has a name input', () => {
  const component = mount(<NewApartment />)
  expect(component.find('label#apt_name').text()).toBe("Name")
})

it('has a submit button', () => {
  const component = mount(<NewApartment />)
  expect(component.find('button#submit').text()).toBe('List Apartment')
})

it('calls submitHandler on submit', () =>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewApartment onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button:0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it('shows flash message when there is an error', () =>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = {
      apt_name: ['Is required.']
    }
  const component = mount(<NewApartment onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('.alert-danger').length).toBe(1)
})

it('highlights name input when there is an error', ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = {
    apt_name: ['Is required.']
  }

  const component = mount(<NewApartment onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#name-form-group.has-error').length).toBe(1)
})
