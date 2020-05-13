import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Counter />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a counter text', () => {
    const text = wrapper.findByTestId('counter-display');
    expect(text.length).toBe(1);
  });

  it('should render an increment button', () => {
    const btn = wrapper.findByTestId('increment-btn');
    expect(btn.length).toBe(1);
  });

  it('should render an decrement button', () => {
    const btn = wrapper.findByTestId('decrement-btn');
    expect(btn.length).toBe(1);
  });
});
