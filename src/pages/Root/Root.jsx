import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Counter } from '..';
import GlobalStyles from '../../theme/styles';

const Root = ({ store }) => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </Provider>
  </>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
