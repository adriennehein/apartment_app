import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})
//
// it('renders the title', ()=>{
//   const app = mount(<App />)
//   expect(app.find('PageHeader').text()).toContain('Apartment Listings')
// })
//
// it('renders create an apartment form', ()=>{
//   const app = mount(<App />)
//   expect(app.find('.subtitle').text()).toEqual('New Listing')
// })

// it('links to apartment index', ()=>{
//   const app = mount(<App />)
//   app.find('a#apartments-link').simulate('click', {button: 0})
//   expect(app.find('.subtitle').text()).toEqual('Available Apartments')
// })
