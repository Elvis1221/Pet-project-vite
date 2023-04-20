import { FORM_LABELS, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../constants';
import { FieldTypes, InputTypes } from '../../components/FormInput/FormInput';
import uuid from 'react-uuid';

enum PostFormNameEnum {
    id = 'ID',
    firstName = 'firstName',
    lastName = 'lastName',
    gender = 'gender',
    phoneNumber = 'phoneNumber',
    fileURL = 'fileURL',
}

export type PostFormValues = {
    [PostFormNameEnum.id]: string;
    [PostFormNameEnum.firstName]: string;
    [PostFormNameEnum.lastName]: string;
    [PostFormNameEnum.gender]: string;
    [PostFormNameEnum.phoneNumber]: string;
    [PostFormNameEnum.fileURL]: string;
};

export type PostFormValuesWithFile = Omit<
    PostFormValues,
    keyof { [PostFormNameEnum.fileURL]: string }
> & { [PostFormNameEnum.fileURL]: FileList };

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
        id: uuid(),
        label: FORM_LABELS.FIRST_NAME,
        type: InputTypes.text,
        name: PostFormNameEnum.firstName,
        placeholder: PLACE_HOLDER.ENTER_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: uuid(),
        label: FORM_LABELS.LAST_NAME,
        type: InputTypes.text,
        name: PostFormNameEnum.lastName,
        placeholder: PLACE_HOLDER.ENTER_LAST_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: uuid(),
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
        id: uuid(),
        label: FORM_LABELS.PHONE_NUMBER,
        type: InputTypes.tel,
        name: PostFormNameEnum.phoneNumber,
        placeholder: PLACE_HOLDER.ENTER_PHONE_NUMBER,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
        fieldType: FieldTypes.input,
    },
    {
        id: uuid(),
        label: FORM_LABELS.UPLOAD_FILE,
        type: InputTypes.file,
        name: PostFormNameEnum.fileURL,
        placeholder: PLACE_HOLDER.UPLOAD_FILE,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // required: true,
        fieldType: FieldTypes.input,
    },
];
