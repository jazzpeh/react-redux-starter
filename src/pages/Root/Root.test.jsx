import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Root from './Root';
import { App, Counter } from '..';

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

  it('should render `Counter` page at `/counter` path', () => {
    const wrapper = mount(router('/counter'));
    expect(wrapper.find(Counter)).toHaveLength(1);
  });
});
