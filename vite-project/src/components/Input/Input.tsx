import React, { FC, useState } from 'react';

// import { ReactComponent as ShowPassword } from './icons/showPassword.svg';
// import { ReactComponent as HiddenPassword } from './icons/hidenPassword.svg';

import classnames from 'classnames';
import css from './Input.module.css';

interface IFormFieldsArr {
  label: string;
  type: string;
  htmlFor: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export enum InputTypes {
  text = 'text',
  password = 'password',
  tel = 'tel',
  date = 'date',
  email = 'email',
}

const Input: FC<IFormFieldsArr> = ({
  label,
  htmlFor,
  onChange,
  type = InputTypes.text,
  id,
  value,
  placeholder,
  className,
}: IFormFieldsArr) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const isPasswordType = passwordShown ? InputTypes.text : InputTypes.password;
  const isShowPassword = type === InputTypes.password;

  const classNames = classnames(css.FormInput, className);

  return (
    <div className={css.InputWrapper}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type === InputTypes.password ? isPasswordType : type}
        id={id}
        value={value}
        onChange={onChange}
        className={classNames}
        placeholder={placeholder}
        required
      />
      {isShowPassword && (
        <i className={css.cross} onClick={togglePasswordVisibility}>
          {passwordShown ? (
            <span>+</span>
          ) : (
            // <ShowPassword className={css.eyeIcon} />
            <span>-</span>
            // <HiddenPassword className={css.eyeIcon} />
          )}
        </i>
      )}
    </div>
  );
};

export default Input;
