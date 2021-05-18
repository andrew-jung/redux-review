import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}
const initialState = { value: 1 } as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value > 1 ? state.value-- : 1;
    },
    reset(state) {
      state.value = 1;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
