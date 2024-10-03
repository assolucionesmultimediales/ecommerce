"use client";
import { Formik, Field, Form } from "formik";
import axios from 'axios'

const CartForm = () => {
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Requiredo';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalido';
    }
    return error;
  };

  const firstName = (value) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

const addContact = async (values) => {
const data = {contactData: values}
const response = await axios.post('/api/add-contact', data);
}

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
      addContact(values)
        }}
      >
        {({ isSubmitting, errors,touched }) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' placeholder='Jane' validate={firstName} />
          {errors.firstName && touched.firstName && <p>Completar</p>}


            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' placeholder='Doe' />

            <label htmlFor='email'>Email</label>
            <Field name='email' placeholder='jane@acme.com' type='email' validate={validateEmail} />
            {errors.email && touched.email && <p>Completar</p>}

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;
