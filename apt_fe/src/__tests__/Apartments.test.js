import React from 'react';
import ReactDOM from 'react-dom';
import Apartments from '../pages/Apartments';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const apartments= [
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


it('Apartments renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Apartments apartments={apartments}/>, div)
})

it('Renders the apartments', () => {
  const component = mount(<Apartments apartments={apartments} />)
  const headings = component.find('h4 > .apartment-name')
  expect(headings.length).toBe(2)
})
