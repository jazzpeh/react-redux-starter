import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Counter } from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

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
