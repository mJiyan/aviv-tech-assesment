import { Field, FormikErrors, FormikHandlers } from 'formik';

import { Property, Maybe } from '@/types';

import { convertSnakeCaseToTitleCase } from '@/utils';

import styles from './input-field.module.scss';

type InputFieldProps = {
  inputKey: string, 
  title?: string, 
  error?: string | FormikErrors<Property["postal_address"]>
  value?: Maybe<string>,
  touched: boolean,
}

const InputField = ({inputKey, title, error, touched}: InputFieldProps) => (
    <div className={styles['input-field__input-group']}>
        <label htmlFor={`${String(inputKey)}`}>{convertSnakeCaseToTitleCase(title ?? inputKey)}:</label>
        <Field
          type="text"
          name={`${String(inputKey)}`}
          className={styles['input-field__input-text']}
        />
        {error && touched && (
          <span className={styles['input-field__error-text']}>*{error as string}</span>            
        )}
  </div>
)

export default InputField;
