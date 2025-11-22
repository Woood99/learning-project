import { fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
   test('with initial state', () => {
      componentRender(<Counter />, {
         storeInitialState: { counter: { value: 10 } },
      });
      expect(screen.getByTestId('counter-value-title')).toHaveTextContent('10');
   });

   test('increment', () => {
      componentRender(<Counter />, {
         storeInitialState: { counter: { value: 10 } },
      });
      fireEvent.click(screen.getByTestId('counter-increment-btn'));
      expect(screen.getByTestId('counter-value-title')).toHaveTextContent('11');
   });

   test('decrement', () => {
      componentRender(<Counter />, {
         storeInitialState: { counter: { value: 10 } },
      });

      fireEvent.click(screen.getByTestId('counter-decrement-btn'));
      expect(screen.getByTestId('counter-value-title')).toHaveTextContent('9');
   });
});
