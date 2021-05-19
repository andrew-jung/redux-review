import { Component } from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction, resetAction } from "./actions";

class ClassyMain extends Component {

  onClick = () => {
    const { dispatch } = this.props;

    dispatch({"type": "DISPATCH"})
  }

  render() {
    const { counter, dispatch } = this.props;

    return (
      <div>
        <div className="big-val">Current value: {counter}</div>
        <button onClick={dispatch(incrementAction)}>Increment</button>
        <button onClick={dispatch(decrementAction)}>Decrement</button>
        <button onClick={dispatch(resetAction)}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.value });

export default connect(mapStateToProps)(ClassyMain);
