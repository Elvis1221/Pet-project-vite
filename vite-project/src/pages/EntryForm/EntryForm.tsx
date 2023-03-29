import React, { useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Input, { InputTypes } from '../../components/Input/Input';
import Button, { ButtonsThemes, ButtonsType } from '../../components/Button/Buttons';
import { BUTTONS_TITLE, KEYS, FORM_LABELS, PLACE_HOLDER, PAGE_TITLES } from '../../constants';
import Modal from '../../components/Modal/Modal';

import css from './EntryForm.module.css';

interface IEntryForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateAttendance: Date;
}

interface IFormFieldsArr {
  label: string;
  type: string;
  id: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const EntryForm: React.FC = () => {
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<IEntryForm>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateAttendance: new Date(),
  });

  const entryFormFieldsArr: IFormFieldsArr[] = [
    {
      label: FORM_LABELS.FIRST_NAME,
      type: InputTypes.text,
      id: KEYS.FIRST_NAME,
      value: formData.firstName,
      placeholder: PLACE_HOLDER.ENTER_NAME,
      onChange: (e: any) => setFormData({ ...formData, firstName: e.target.value }),
    },
    {
      label: FORM_LABELS.LAST_NAME,
      type: InputTypes.text,
      id: KEYS.LAST_NAME,
      value: formData.lastName,
      placeholder: PLACE_HOLDER.ENTER_SURNAME,
      onChange: (e: any) => setFormData({ ...formData, lastName: e.target.value }),
    },
    {
      label: FORM_LABELS.EMAIL,
      type: InputTypes.email,
      id: KEYS.EMAIL,
      value: formData.email,
      placeholder: PLACE_HOLDER.ENTER_EMAIL,
      onChange: (e: any) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      label: FORM_LABELS.PHONE_NUMBER,
      type: InputTypes.tel,
      id: KEYS.PHONE_NUMBER,
      value: formData.phoneNumber,
      placeholder: PLACE_HOLDER.ENTER_PHONE_NUMBER,
      onChange: (e: any) => setFormData({ ...formData, phoneNumber: e.target.value }),
    },
    {
      label: FORM_LABELS.DATA_ATTENDANCE,
      type: InputTypes.date,
      id: KEYS.DATA_ATTENDANCE,
      value: formData.dateAttendance,
      placeholder: PLACE_HOLDER.SELECT_DATE,
      onChange: (e: any) => setFormData({ ...formData, dateAttendance: e.target.value }),
    },
  ];

  const isCloseModal = () => setIsDisplayModal(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <PageWrapper pageTitle={PAGE_TITLES.ENTRY_FORM}>
      <form onSubmit={handleSubmit} className={css.FormWrapper}>
        {entryFormFieldsArr.map((item, key) => (
          <Input
            key={key}
            label={item.label}
            type={item.type}
            htmlFor={item.id}
            id={item.id}
            value={item.value}
            onChange={item.onChange}
            className={css.Input}
            placeholder={item.placeholder}
            required
          />
        ))}
        {isDisplayModal ? (
          <Modal
            display={isDisplayModal}
            onClose={isCloseModal}
            children={
              <div className={css.ModalWrapper}>
                <span>Your details have been sent to.</span>
                <Button className={css.ModalButton} onClick={() => setIsDisplayModal(false)}>
                  Close
                </Button>
              </div>
            }
          />
        ) : null}
        <Button
          theme={ButtonsThemes.blue}
          type={ButtonsType.submit}
          children={BUTTONS_TITLE.SUBMIT}
          className={css.Button}
          onClick={() => setIsDisplayModal(true)}
          disabled={!formData.phoneNumber}
        />
      </form>
    </PageWrapper>
  );
};

export default EntryForm;
