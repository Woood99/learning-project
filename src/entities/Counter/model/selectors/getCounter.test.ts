import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter, getCounterValue } from './getCounter';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
   test('get counter', () => {
      const state: DeepPartial<StateSchema> = {
         counter: {
            value: 1,
         },
      };
      expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
   });

   test('get counter value', () => {
      const state: DeepPartial<StateSchema> = {
         counter: {
            value: 10,
         },
      };
      expect(getCounterValue(state as StateSchema)).toEqual(10);
   });
});
