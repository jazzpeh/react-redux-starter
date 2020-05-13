import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/actions/counter';
import Counter from '../../components/Counter';

export class CounterRedux extends PureComponent {
  render() {
    const { counter } = this.props;

    return <Counter counter={counter} />;
  }
}

CounterRedux.propTypes = {
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(incrementCounter()),
    onDecrementCounter: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
