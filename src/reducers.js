import { incrementActionCreator, incrementBySomeValueActionCreator } from "./actions";

export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case incrementActionCreator.type:
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RESET":
      return { ...state, value: 0 };
    case incrementBySomeValueActionCreator.type:
      return {...state, value: state.value + incrementBySomeValueActionCreator.payload}
    default:
      return state;
  }
};
