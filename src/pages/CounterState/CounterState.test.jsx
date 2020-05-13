import React from 'react';
import { shallow, mount } from 'enzyme';
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
    wrapper = mount(<CounterState />);
    wrapper.setState({ counter });
    const btn = wrapper.find('button[data-testid="increment-btn"]');
    const display = wrapper.find('h1[data-testid="counter-display"]');
    btn.simulate('click');
    expect(display.text()).toEqual((counter + 1).toString());
  });

  it('should decrease counter display by 1 when the decrement button is clicked', () => {
    const counter = 7;
    wrapper = mount(<CounterState />);
    wrapper.setState({ counter });
    const btn = wrapper.find('button[data-testid="decrement-btn"]');
    const display = wrapper.find('h1[data-testid="counter-display"]');
    btn.simulate('click');
    expect(display.text()).toEqual((counter - 1).toString());
  });
});
