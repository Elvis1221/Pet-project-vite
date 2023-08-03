import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonsType } from '../../components/Button/Buttons';

import {
  EntreFormField,
  registrationFormFieldsArr,
  RegistrationFormValues,
} from './registrationFormFieldsArr';
import { BUTTONS_TITLE, PAGE_TITLES, PATTERNS } from '../../constants';

import css from './RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>();

  const navigateHome = () => {
    navigate('/');
  };

  const onSubmit: SubmitHandler<RegistrationFormValues> = data => {
    console.log(data);
    navigateHome();
  };

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
                pattern={item.pattern}
              />
              {errors[item.name] && <span className={css.ErrorMessage}>{item.errorMessages}</span>}
            </div>
          </div>
        ))}
        <Button
          children={BUTTONS_TITLE.SUBMIT}
          type={ButtonsType.submit}
          className={css.Button}
        />
      </form>
    </PageWrapper>
  );
};

export default RegistrationForm;
