import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Root from './Root';
import { App, CounterState, CounterRedux } from '..';

describe('Root', () => {
  const initialState = { counter: { value: 0 } };
  const mockStore = configureStore();
  let router = null;

  beforeAll(() => {
    router = (path) => (
      <MemoryRouter initialEntries={[path]}>
        <Root store={mockStore(initialState)} />
      </MemoryRouter>
    );
  });

  it('should render `App` page at `/` path', () => {
    const wrapper = mount(router('/'));
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('should render `CounterRedux` page at `/counter/redux` path', () => {
    const wrapper = mount(router('/counter/redux'));
    expect(wrapper.find(CounterRedux)).toHaveLength(1);
  });

  it('should render `CounterState` page at `/counter/state` path', () => {
    const wrapper = mount(router('/counter/state'));
    expect(wrapper.find(CounterState)).toHaveLength(1);
  });
});
