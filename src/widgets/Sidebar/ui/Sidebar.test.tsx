import { Sidebar } from 'widgets/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
   test('test render', () => {
      componentRender(<Sidebar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('test toggle', () => {
      componentRender(<Sidebar />);
      const btnToggle = screen.getByTestId('sidebar-toggle');
      fireEvent.click(btnToggle);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
   });
});
