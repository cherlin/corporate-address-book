import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Header title="Title" />);
    const title = wrapper.find('h1').text();
    expect(title).toEqual('Title');
  });
});
