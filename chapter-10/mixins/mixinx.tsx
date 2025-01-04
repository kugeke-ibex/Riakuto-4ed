import React from 'react';

const CounterMixin = {
  getInitialState: () => ({ count: 0 });
  reset: () => {
    this.setState({ count: 0 });
  },
  increment: () => {
    this.setState((state) => ({ count: state.count + 1}));
  },
  componentDdUpdate() {
    if (this.state.count > this.props.maxCount) this.reset();
  },
};

const Counter = React.createClass({
  propTypes: {
    maxCount: React.PropTypes.number.isRequired,
  },
  mixins: [CounterMixin],

  render: () => {
    const { count = 0} = this.state;

    return (
      <div>
        <div>
          {count}
        </div>
        <button onClick={reset} type="button">
          Reset
        </button>
        <button onClick={increment} type="button">
          +1
        </button>
      </div>
    );
  }
});

export default Counter;
