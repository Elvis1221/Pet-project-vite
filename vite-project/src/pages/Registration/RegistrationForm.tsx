import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { EntreFormField, registrationFormFieldsArr } from './registrationFormFieldsArr';

import css from './RegistrationForm.module.css';
import Button, { ButtonsType } from '../../components/Button/Buttons';
import { BUTTONS_TITLE, PAGE_TITLES } from '../../constants';

type RegistrationFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>();

  const onSubmit: SubmitHandler<RegistrationFormValues> = data => console.log(data);

  return (
    <PageWrapper pageTitle={PAGE_TITLES.REGISTRATION}>
      <form className={css.FormWrapper} onSubmit={handleSubmit(onSubmit)}>
        {registrationFormFieldsArr.map((item: EntreFormField) => (
          <div className={css.InputWrapper}>
            <label className={css.Label}>{item.label}</label>
            <div className={css.InputContainer}>
              <input
                placeholder={item.placeholder}
                className={css.Input}
                {...register(item.name, { required: item.required })}
              />
              {errors[item.name] && (
                <span className={css.ErrorMessage}>This field is required</span>
              )}
            </div>
          </div>
        ))}
        <Button disabled={!isValid} children={BUTTONS_TITLE.SUBMIT} type={ButtonsType.submit} className={css.Button}  />
      </form>
    </PageWrapper>
  );
};

export default RegistrationForm;
