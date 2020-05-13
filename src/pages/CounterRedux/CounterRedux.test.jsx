import React from 'react';
import { shallow } from 'enzyme';
import { CounterRedux } from './CounterRedux';

describe('CounterRedux', () => {
  let wrapper;
  let props;

  beforeAll(() => {
    props = {
      counter: 0,
      onIncrementCounter: jest.fn(),
      onDecrementCounter: jest.fn(),
    };

    wrapper = shallow(<CounterRedux {...props} />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
