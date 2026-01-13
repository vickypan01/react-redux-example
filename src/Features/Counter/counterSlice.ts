import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  time: number;
  isRunning: boolean;
}

const initialState: CounterState = {
  value: 0,
  time: 0,
  isRunning: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start(state) {
      state.isRunning = true;
    },
    stop(state) {
      state.isRunning = false;
    },
    reset(state) {
      state.time = 0;
      state.isRunning = false;
    },
    tick(state) {
      state.time += 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { start, stop, reset, tick } = timerSlice.actions;
export const counterReducer = counterSlice.reducer;
export const timerReducer = timerSlice.reducer;
