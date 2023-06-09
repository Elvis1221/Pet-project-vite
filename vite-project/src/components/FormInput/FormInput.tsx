import React, { FC } from 'react';
import css from './FormInput.module.css';
import classnames from 'classnames';

interface IItem {
  id: string;
  label: string;
  name: string;
  type: string;
  errorMessages: string;
  options?: { value: string }[];
  fieldType: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
}

interface IInputFormFields {
  data: IItem[];
  register: any;
  errors: any;
  onChange?: any;
  className?: string;
}

export enum InputTypes {
  text = 'text',
  password = 'password',
  file = 'file',
  tel = 'tel',
  date = 'date',
  email = 'email',
}

export enum FieldTypes {
  input = 'input',
  select = 'select',
  checkbox = 'checkbox',
}

const FormInput: FC<IInputFormFields> = ({ data, errors, register, className }) => {
  const inputClassNames = classnames(css.Input, className);
  const selectClassNames = classnames(css.Input, className);

  return (
    <>
      {data.map((item: IItem) => (
        <div className={css.InputWrapper} key={item.id}>
          <label className={css.Label}>{item.label}</label>
          <div className={css.InputContainer}>
            {item.fieldType === FieldTypes.input && (
              <input
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                className={inputClassNames}
                {...register(item.name, { required: item.required })}
                pattern={item.pattern}
              />
            )}
            {item.fieldType === FieldTypes.select && (
              <select
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
                className={selectClassNames}
                {...register(item.name, { required: item.required })}
              >
                {item.options?.map((optionsItem: { value: string }) => (
                  <option key={optionsItem.value}>{optionsItem.value}</option>
                ))}
              </select>
            )}
            {errors[item.name] && <span className={css.ErrorMessage}>{item.errorMessages}</span>}
          </div>
        </div>
      ))}
    </>
  );
};

export default FormInput;
