import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should renders without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show the correct link to counter page', () => {
    const link = wrapper.find('Styled(NavLink)');
    expect(link.prop('to')).toEqual('/counter');
  });
});
