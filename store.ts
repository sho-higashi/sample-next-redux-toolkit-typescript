import { Action, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'

const makeStore = ()=> configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ThunkDispatch<AppState, unknown, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore as any);