import React from 'react';
import Enzyme, { mount } from 'enzyme';
import rrd, { MemoryRouter } from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import PropTypes from 'prop-types';

import Root from './Root';
import { App, Counter } from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Mocks BrowserRouter so that the it doesn't overlaps with MemoryRouter
 */
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

rrd.BrowserRouter.propTypes = {
  children: PropTypes.object.isRequired,
};

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
