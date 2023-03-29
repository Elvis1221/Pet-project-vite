import React from 'react';

import css from './SuccessRegistration.module.css'

const SuccessRegistration = () => {
  return (
    <div className={css.SuccessRegistrationWrapper}>
      <div className={css.Content}>
      <h1 className={css.ContentTitle}>Спасибо за регистрацию!</h1>
      <h3>На вашу электронную почту было отправлено письмо для подтверждением регистрации.</h3>
      </div>
    </div>
  );
};

export default SuccessRegistration;