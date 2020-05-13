import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

describe('Counter', () => {
  let wrapper;
  let props;

  beforeAll(() => {
    props = {
      counter: 0,
      onIncrementCounter: jest.fn(),
      onDecrementCounter: jest.fn(),
    };

    wrapper = shallow(<Counter {...props} />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
