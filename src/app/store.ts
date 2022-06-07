import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createLogger } from 'redux-logger';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { counterMiddleware } from '../middlewares/counter';

const logger = createLogger({});

const ADDED_MIDDLEWARES = [counterMiddleware, logger];

const addedMiddlewares = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware
) => {
  const middlewares = ADDED_MIDDLEWARES;

  if (middlewares.length > 0) {
    return getDefaultMiddleware().concat(...middlewares);
  }

  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => addedMiddlewares(getDefaultMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
