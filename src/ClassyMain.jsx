import { Component } from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction, resetAction } from "./actions";

class ClassyMain extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;

    return (
      <div>
        <div className="big-val">Current value: {counter}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.value });
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    reset: () => dispatch(resetAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassyMain);
