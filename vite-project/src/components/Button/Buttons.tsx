import { FC, ComponentProps } from 'react';

import classnames from 'classnames';
import css from './Button.module.css';

export enum ButtonsThemes {
  blue = 'Blue',
  white = 'White',
}

export enum ButtonsType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface IButtonProps extends ComponentProps<'button'> {
  theme?: ButtonsThemes;
  type?: ButtonsType;
}

const Button: FC<IButtonProps> = ({
  type = ButtonsType.button,
  children,
  onClick,
  theme = ButtonsThemes.blue,
  className,
  disabled,
}) => {
  const classNames = classnames(css.Button, css[theme], className);

  return (
    <button type={type} onClick={onClick} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
