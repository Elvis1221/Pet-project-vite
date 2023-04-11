import uuid from 'react-uuid';

export const randomUuid = uuid();

export const PATTERNS = {
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    EMAIL: /[a-z0-9]+@[a-z0-9.-]+.[a-z]{2,}$/,
    PHONE_NUMBER: /^(\+48\s)?\d{9}$/,
};

export const KEYS = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    PHONE_NUMBER: 'phoneNumber',
    DATA_ATTENDANCE: 'dateAttendance',
};

export const FORM_LABELS = {
    FIRST_NAME: 'First Name:',
    LAST_NAME: 'Last Name:',
    EMAIL: 'Email:',
    PHONE_NUMBER: 'Phone number:',
    DATA_ATTENDANCE: 'Data attendance:',
    PASSWORD: 'Password:',
    REPEAT_PASSWORD: 'Repeat password:',
};

export const BUTTONS_TITLE = {
    SUBMIT: 'Submit',
    MODAL: 'Modal',
    CLOSE: 'Close',
};

export const PLACE_HOLDER = {
    ENTER_NAME: 'Enter name',
    ENTER_LAST_NAME: 'Enter last name',
    ENTER_SURNAME: 'Enter surname',
    ENTER_EMAIL: 'Enter email',
    ENTER_PHONE_NUMBER: 'Enter phone number',
    SELECT_DATE: 'Select date',
    PASSWORD: 'Enter password',
    REPEAT_PASSWORD: 'Repeat password',
};

export const PAGE_TITLES = {
    PORTFOLIO: 'Portfolio',
    ENTRY_FORM: 'Entry Form',
    ENTRIES: 'Entries',
    ABOUT_ME: 'About Me',
    REGISTRATION: 'Registration Form',
    HOME: 'Home',
};

export const VALIDATION_MESSAGES = {
    REQUIRED_FIELD: 'This field is required',
};
