import { FORM_LABELS, PLACE_HOLDER, randomUuid, VALIDATION_MESSAGES } from '../../constants';
import { FieldTypes, InputTypes } from '../../components/FormInput/FormInput';

enum PostFormNameEnum {
    firstName = 'firstName',
    lastName = 'lastName',
    gender = 'gender',
    phoneNumber = 'phoneNumber',
    photo = 'photo',
}

export type PostFormValues = {
    [PostFormNameEnum.firstName]: string;
    [PostFormNameEnum.lastName]: string;
    [PostFormNameEnum.gender]: string;
    [PostFormNameEnum.phoneNumber]: string;
    [PostFormNameEnum.photo]: FileList;
};

export type PostFormFields = {
    id: string;
    label: string;
    name: PostFormNameEnum;
    type: string;
    errorMessages: string;
    fieldType: string;
    options?: { value: string }[];
    required?: boolean;
    placeholder?: string;
    pattern?: any;
};

export const postFormFieldsArr: PostFormFields[] = [
    {
        id: randomUuid,
        label: FORM_LABELS.FIRST_NAME,
        type: InputTypes.text,
        name: PostFormNameEnum.firstName,
        placeholder: PLACE_HOLDER.ENTER_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: randomUuid,
        label: FORM_LABELS.LAST_NAME,
        type: InputTypes.text,
        name: PostFormNameEnum.lastName,
        placeholder: PLACE_HOLDER.ENTER_LAST_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: randomUuid,
        label: FORM_LABELS.GENDER,
        type: FieldTypes.select,
        name: PostFormNameEnum.gender,
        placeholder: PLACE_HOLDER.CHOSE_GENDER,
        options: [{ value: 'male' }, { value: 'female' }],
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.select,
    },
    {
        id: randomUuid,
        label: FORM_LABELS.PHONE_NUMBER,
        type: InputTypes.tel,
        name: PostFormNameEnum.phoneNumber,
        placeholder: PLACE_HOLDER.ENTER_PHONE_NUMBER,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.PHONE_NUMBER,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: randomUuid,
        label: FORM_LABELS.UPLOAD_FORM,
        type: InputTypes.file,
        name: PostFormNameEnum.photo,
        placeholder: PLACE_HOLDER.UPLOAD_PHOTO,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
];
