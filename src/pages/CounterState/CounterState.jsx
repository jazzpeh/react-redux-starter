import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Counter from '../../components/Counter';

const Link = styled(NavLink)`
  color: #61dafb;
  font-size: calc(10px + 2vmin);
  left: 5%;
  margin-bottom: 20px;
  position: fixed;
  top: 5%;
`;

class CounterState extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <Link to="/" data-testid="home">
          Back
        </Link>
        <Counter
          data-testid="counter"
          onClickIncrement={() => this.setState({ counter: counter + 1 })}
          onClickDecrement={() => this.setState({ counter: counter - 1 })}
          counter={counter}
        />
      </>
    );
  }
}

export default CounterState;
