import { createSlice } from '@reduxjs/toolkit';

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    clearValue: (state) => {
      state.value = 0;
    },
    addValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, clearValue, addValue } =
  counterSlice.actions;

export default counterSlice.reducer;
