import { FORM_LABELS, PATTERNS, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../constants';
import { InputTypes } from '../../components/Input/Input';

enum RegistrationFormNameEnum {
    email = 'email',
    firstName = 'firstName',
    lastName = 'lastName',
    phoneNumber = 'phoneNumber',
    password = 'password',
    repeatPassword = 'repeatPassword',
}

export type RegistrationFormValues = {
    [RegistrationFormNameEnum.email]: string;
    [RegistrationFormNameEnum.firstName]: string;
    [RegistrationFormNameEnum.lastName]: string;
    [RegistrationFormNameEnum.phoneNumber]: string;
    [RegistrationFormNameEnum.password]: string;
    [RegistrationFormNameEnum.repeatPassword]: string;
};

export type EntreFormField = {
    label: string;
    name: RegistrationFormNameEnum;
    type: string;
    errorMessages: string;
    required?: boolean;
    placeholder?: string;
    pattern?: any;
};

export const registrationFormFieldsArr: EntreFormField[] = [
    {
        label: FORM_LABELS.FIRST_NAME,
        type: InputTypes.text,
        name: RegistrationFormNameEnum.firstName,
        placeholder: PLACE_HOLDER.ENTER_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
    },
    {
        label: FORM_LABELS.LAST_NAME,
        type: InputTypes.text,
        name: RegistrationFormNameEnum.lastName,
        placeholder: PLACE_HOLDER.ENTER_LAST_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
    },
    {
        label: FORM_LABELS.EMAIL,
        type: InputTypes.email,
        name: RegistrationFormNameEnum.email,
        placeholder: PLACE_HOLDER.ENTER_EMAIL,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.EMAIL,
        required: true,
    },
    {
        label: FORM_LABELS.PHONE_NUMBER,
        type: InputTypes.tel,
        name: RegistrationFormNameEnum.phoneNumber,
        placeholder: PLACE_HOLDER.ENTER_PHONE_NUMBER,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.PHONE_NUMBER,
        required: true,
    },
    {
        label: FORM_LABELS.PASSWORD,
        type: InputTypes.password,
        name: RegistrationFormNameEnum.password,
        placeholder: PLACE_HOLDER.PASSWORD,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.PASSWORD,
        required: true,
    },
    {
        label: FORM_LABELS.REPEAT_PASSWORD,
        type: InputTypes.password,
        name: RegistrationFormNameEnum.repeatPassword,
        placeholder: PLACE_HOLDER.REPEAT_PASSWORD,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.PASSWORD,
        required: true,
    },
];
