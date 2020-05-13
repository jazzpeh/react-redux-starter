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

  it('should show the correct link to counter page', () => {
    const link = wrapper.findByTestId('link');
    expect(link.prop('to')).toEqual('/counter');
  });
});
