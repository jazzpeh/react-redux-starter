import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CounterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CounterText = styled.h1`
  font-size: 10rem;
  color: white;
`;

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  color: ${(props) => props.fontColor};
  cursor: pointer;
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  line-height: 36px;
  margin: 0 10px;
  outline: none;
  padding: 15px 20px;
  position: relative;
  text-decoration: none;
  text-align: center;
  user-select: none;
  vertical-align: baseline;
  white-space: nowrap;
`;

const Counter = ({ counter, onClickIncrement, onClickDecrement }) => (
  <CounterWrapper>
    <CounterText data-testid="counter-display">{counter}</CounterText>
    <div>
      <Button
        bgColor="white"
        fontColor="black"
        onClick={onClickIncrement}
        data-testid="increment-btn"
      >
        Increment
      </Button>
      <Button
        bgColor="#f44336"
        fontColor="white"
        onClick={onClickDecrement}
        data-testid="decrement-btn"
      >
        Decrement
      </Button>
    </div>
  </CounterWrapper>
);

Counter.propTypes = {
  counter: PropTypes.number,
  onClickIncrement: PropTypes.func,
  onClickDecrement: PropTypes.func,
};

Counter.defaultProps = {
  counter: 0,
  onClickIncrement: () => {},
  onClickDecrement: () => {},
};

export default Counter;
