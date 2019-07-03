import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import HomePage from '../components/HomePage'
import Search from '../components/Search'

configure({adapter: new EnzymeAdapter()});

describe('<HomePage />', () => {
  it('renders one <Search /> components', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Search)).to.have.lengthOf(1);
  });
});