import React from 'react';
import { shallow } from 'enzyme';
import { CounterRedux } from './CounterRedux';

describe('CounterRedux', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      counter: 0,
      handleIncrement: jest.fn(),
      handleDecrement: jest.fn(),
    };

    wrapper = shallow(<CounterRedux {...props} />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the correct link to home page', () => {
    const link = wrapper.findByTestId('home');
    expect(link.prop('to')).toEqual('/');
  });

  it('should call `handleIncrement` when clicked on increment button', () => {
    wrapper.findByTestId('counter').props().onClickIncrement();
    expect(props.handleIncrement.mock.calls.length).toBe(1);
    expect(props.handleDecrement.mock.calls.length).toBe(0);
  });

  it('should call `handleDecrement` when clicked on decrement button', () => {
    wrapper.findByTestId('counter').props().onClickDecrement();
    expect(props.handleIncrement.mock.calls.length).toBe(0);
    expect(props.handleDecrement.mock.calls.length).toBe(1);
  });
});
