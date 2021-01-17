import { createSlice } from '@reduxjs/toolkit'

export type ClockState = {
    lastUpdate: number;
    light: boolean;
  }

const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    lastUpdate: 0,
    light: true,
  },
  reducers: {
    tick: (state, action) => {
      state.lastUpdate = action.payload.lastUpdate
      state.light = !!action.payload.light
    },
  },
})

export const selectClock = (state:{clock: ClockState}) => state.clock

export const { tick } = clockSlice.actions

export default clockSlice.reducer
