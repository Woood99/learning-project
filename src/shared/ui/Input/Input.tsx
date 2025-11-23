import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
   className?: string;
   value?: string;
   onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
   const { className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps } = props;

   const [isFocused, setIsFocused] = useState(false);
   const [caretPosition, setCaretPosition] = useState(0);
   const inputRef = useRef<HTMLInputElement>();

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.target.value;
      onChange?.(currentValue);
      setCaretPosition(currentValue.length);
   };

   const onBlur = () => setIsFocused(false);
   const onFocus = () => setIsFocused(true);
   const onSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

   useEffect(() => {
      if (autoFocus) {
         setIsFocused(true);
         inputRef.current.focus();
      }
   }, [autoFocus]);

   return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
         {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
         <div className={styles.caretWrapper}>
            <input
               type={type}
               value={value}
               onChange={onChangeHandler}
               className={styles.input}
               onFocus={onFocus}
               onBlur={onBlur}
               onSelect={onSelect}
               ref={inputRef}
               {...otherProps}
            />
            {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }} />}
         </div>
      </div>
   );
});

export default Input;
