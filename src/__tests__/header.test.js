import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from '../components/Header'


configure({adapter: new EnzymeAdapter()});

describe('<Header />', () => {
  it('renders one <Search /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-title')).to.have.lengthOf(1);
  });
});