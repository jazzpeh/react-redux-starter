/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import reactRouterDom from 'react-router-dom';
import PropTypes from 'prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

ShallowWrapper.prototype.findByTestId = function findByTestId(id) {
  return this.find(`[data-testid="${id}"]`);
};

reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>;

reactRouterDom.BrowserRouter.propTypes = {
  children: PropTypes.object.isRequired,
};
