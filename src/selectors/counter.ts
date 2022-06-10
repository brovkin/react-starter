import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@app/store';

const counterSelector = createSelector(
  (state: RootState) => state.counter,
  (counter) => counter?.value
);

export default counterSelector;
