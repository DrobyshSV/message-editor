import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outlined' | 'filled' | 'float';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'float_duo';
export type ButtonSize = 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  color?: ButtonColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      variant = 'outlined',
      disabled,
      size = 'large',
      fullWidth,
      addonLeft,
      addonRight,
      color = 'secondary',
      ...otherProps
    } = props;

    const mods: Mods = {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
    };

    return (
      <button
        type='button'
        className={classNames(styles.Button, mods, [
          className,
          styles[variant],
          styles[size],
          styles[color],
        ])}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {addonLeft && (
          <div className={styles.addonLeft}>{addonLeft}</div>
        )}
        {children}
        {addonRight && (
          <div className={styles.addonRight}>{addonRight}</div>
        )}
      </button>
    );
  },
);
