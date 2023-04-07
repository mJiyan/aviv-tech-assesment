import { Formik, Form, Field, FormikHelpers } from 'formik';

import { initialValues } from '@/const';
import { UpdateData } from '@/redux/actions';
import { InputField } from "@/modules/InputField/"
import { formikObjectSchema } from '@/utils';
import { useAddProperty } from '@/hooks';

import styles from './listing-form.module.scss';

export type SubmitFormValues = Omit<UpdateData, "created_date">

export type SubmitProps = ((values: SubmitFormValues, formikHelpers: FormikHelpers<SubmitFormValues>) => void | Promise<SubmitFormValues>) & ((submitedValues: SubmitFormValues) => void)

const ListingForm = () => {

  const submit = useAddProperty();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        submit(values);
        resetForm({});
        setSubmitting(false);
       }}
      validationSchema={formikObjectSchema()}
    >
      {({ errors, touched }) => (
      <Form className={styles['listing-form']}>
        <div className={styles['listing-form__card']}>
          {initialValues &&
            Object.keys(initialValues).map((initialValuesKey) => (
              initialValuesKey === "postal_address" ?
                Object.keys(initialValues[initialValuesKey]).map((postalAddressKeys) => (
                (
                  <InputField
                    key={postalAddressKeys}
                    inputKey={`postal_address.${postalAddressKeys}`} 
                    error={errors && errors?.[initialValuesKey]?.[postalAddressKeys as keyof SubmitFormValues["postal_address"]]}
                    title={postalAddressKeys}
                    touched={!!touched?.[initialValuesKey]?.[postalAddressKeys as keyof SubmitFormValues["postal_address"]]}
                  />
                ))):
                initialValuesKey !== "building_type" &&
                (
                  <InputField 
                    key={initialValuesKey}
                    inputKey={initialValuesKey} 
                    error={errors && errors?.[initialValuesKey as keyof SubmitFormValues]}
                    touched={!!touched?.[initialValuesKey as keyof SubmitFormValues]}
                  />
                )
              )
            )
          }
          <div className={styles['listing-form__input-group']}>
            <label htmlFor="building_type">Building type:</label>
            <Field
                name="building_type"
                as="select"
                className={styles['listing-form__select']}
            >
              <option value="STUDIO">Studio</option>
              <option value="APARTMENT">Apartment</option>
              <option value="HOUSE">House</option>
            </Field>
          </div>
          <button
            type="submit"
            className={styles['listing-form__button--submit']}
          >
            Create
          </button>
        </div>
      </Form>
       )}
    </Formik>
  );
};

export default ListingForm;
