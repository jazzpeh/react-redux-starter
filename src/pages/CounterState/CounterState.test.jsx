import React from 'react';
import { shallow } from 'enzyme';
import CounterState from './CounterState';

describe('Counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterState />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should start the counter at 0', () => {
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
  });

  it('should increase counter display by 1 when the increment button is clicked', () => {
    const counter = 7;
    wrapper.setState({ counter });
    wrapper.findByTestId('counter').props().onClickIncrement();
    expect(wrapper.state('counter')).toEqual(counter + 1);
  });

  it('should decrease counter display by 1 when the decrement button is clicked', () => {
    const counter = 7;
    wrapper.setState({ counter });
    wrapper.findByTestId('counter').props().onClickDecrement();
    expect(wrapper.state('counter')).toEqual(counter - 1);
  });

  it('should render the correct link to home page', () => {
    const link = wrapper.findByTestId('home');
    expect(link.prop('to')).toEqual('/');
  });
});
