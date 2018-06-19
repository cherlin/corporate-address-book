import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('includes Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toBeTruthy();
  });

  it('has Routes', () => {
    const wrapper = shallow(<App />);
    const routes = wrapper.find('Route');
    expect(routes.length).toEqual(2);
  });
});
