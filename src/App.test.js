import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders "Welcome to React"', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('.App-title').text();
    expect(text).toEqual('Welcome to React');
  });
});
