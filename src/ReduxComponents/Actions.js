import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "counter", // slice name
  initialState: {
    value: 0, // initial state
  },
  reducers: {
    increment: (state) => {
      state.value++; // increment the count by 1
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = actionSlice.actions; // export the actions

export default actionSlice.reducers;
