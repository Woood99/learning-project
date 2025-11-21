import { useCallback, useState } from 'react';

interface UseModalResult {
   isOpen: boolean;
   open: () => void;
   close: () => void;
   toggle: () => void;
}

export const useModal = (initialValue = false): UseModalResult => {
   const [isOpen, setIsOpen] = useState(initialValue);

   const open = useCallback(() => setIsOpen(true), []);
   const close = useCallback(() => setIsOpen(false), []);
   const toggle = useCallback(() => setIsOpen(prev => !prev), []);

   return { isOpen, open, close, toggle };
};
