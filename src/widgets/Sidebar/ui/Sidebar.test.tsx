import { Sidebar } from 'widgets/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
   test('test render', () => {
      renderWithTranslation(<Sidebar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('test toggle', () => {
      renderWithTranslation(<Sidebar />);
      const btnToggle = screen.getByTestId('sidebar-toggle');
      fireEvent.click(btnToggle);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
   });
});
