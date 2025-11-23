import { classNames } from 'shared/lib/classNames';
import styles from './Modal.module.scss';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Portal from '../Portal/Portal';

export interface ModalProps {
   className?: string;
   children: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
   lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
   const { className, children, isOpen, onClose, lazy } = props;

   const [isClosing, setIsClosing] = useState(false);
   const [isMounted, setIsMounted] = useState(false);

   const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

   const closeHandler = useCallback(() => {
      if (!onClose) return;
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
         onClose();
         setIsClosing(false);
      }, ANIMATION_DELAY);
   }, [onClose]);

   const onKeyDownHandler = useCallback(
      (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            closeHandler();
         }
      },
      [closeHandler]
   );

   const onContentClick = useCallback((e: MouseEvent) => {
      e.stopPropagation();
   }, []);

   const mods = {
      [styles.opened]: isOpen,
      [styles.isClosing]: isClosing,
   };

   useEffect(() => {
      if (isOpen) {
         window.addEventListener('keydown', onKeyDownHandler);
      }

      return () => {
         clearTimeout(timerRef.current);
         window.removeEventListener('keydown', onKeyDownHandler);
      };
   }, [isOpen, onKeyDownHandler]);

   useEffect(() => {
      if (isOpen) {
         setIsMounted(true);
      }
   }, [isOpen]);

   if (lazy && !isMounted) return null;

   return (
      <Portal>
         <div className={classNames(styles.Modal, mods, [className])}>
            <div className={styles.overlay} onClick={closeHandler}>
               <div className={styles.content} onClick={onContentClick}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
};

export default Modal;
