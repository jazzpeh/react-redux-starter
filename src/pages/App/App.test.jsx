import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should renders without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the correct link to counter redux page', () => {
    const link = wrapper.findByTestId('redux');
    expect(link.prop('to')).toEqual('/counter/redux');
  });

  it('should render the correct link to counter state page', () => {
    const link = wrapper.findByTestId('state');
    expect(link.prop('to')).toEqual('/counter/state');
  });
});
