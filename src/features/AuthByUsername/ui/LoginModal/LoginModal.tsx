import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui';
import LoginForm from '../LoginForm/LoginForm';
import { ModalProps } from 'shared/ui/Modal/Modal';

interface LoginModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
   className?: string;
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
   return (
      <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
         <LoginForm />
      </Modal>
   );
};

export default LoginModal;
