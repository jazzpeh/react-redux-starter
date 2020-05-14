import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/actions/counter';
import Counter from '../../components/Counter';

const Link = styled(NavLink)`
  color: #61dafb;
  font-size: calc(10px + 2vmin);
  left: 5%;
  margin-bottom: 20px;
  position: fixed;
  top: 5%;
`;

const Loader = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export class CounterRedux extends PureComponent {
  render() {
    const { counter, handleDecrement, handleIncrement, isLoading } = this.props;

    return (
      <>
        {isLoading && <Loader>Loading...</Loader>}
        <Link to="/" data-testid="home">
          Back
        </Link>
        <Counter
          data-testid="counter"
          onClickDecrement={handleDecrement}
          onClickIncrement={handleIncrement}
          counter={counter}
        />
        ;
      </>
    );
  }
}

CounterRedux.propTypes = {
  isLoading: PropTypes.bool,
  counter: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

CounterRedux.defaultProps = {
  isLoading: false,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.isLoading,
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(incrementCounter()),
    handleDecrement: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
