import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
export const getCounterValue = createSelector(getCounter, counter => counter.value);
