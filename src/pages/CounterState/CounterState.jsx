import React, { PureComponent } from 'react';
import Counter from '../../components/Counter';

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
      <Counter
        data-testid="counter"
        onClickIncrement={() => this.setState({ counter: counter + 1 })}
        onClickDecrement={() => this.setState({ counter: counter - 1 })}
        counter={counter}
      />
    );
  }
}

export default CounterState;
