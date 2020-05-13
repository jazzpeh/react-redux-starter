import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/actions/counter';

const CounterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CounterText = styled.h1`
  font-size: 10rem;
  color: white;
`;

export class Counter extends PureComponent {
  render() {
    const { counter } = this.props;

    return (
      <CounterWrapper>
        <CounterText>{counter}</CounterText>
      </CounterWrapper>
    );
  }
}

Counter.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
