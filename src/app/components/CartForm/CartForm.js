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
    addContact(values);
  }}
>
  {({ isSubmitting, errors, touched }) => (
    <Form className="flex flex-col space-y-4">
      <label htmlFor="firstName" className="text-pink-500 text-sm font-semibold">
        First Name
      </label>
      <Field
        name="firstName"
        placeholder="Jane"
        validate={firstName}
        className="border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white font-inter font-medium "
      />
      {errors.firstName && touched.firstName && (
        <p className="text-yellow-400 text-sm">Completar</p>
      )}

      <label htmlFor="lastName" className="text-pink-500 text-sm font-semibold">
        Last Name
      </label>
      <Field
        name="lastName"
        placeholder="Doe"
        className="border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white"
      />

      <label htmlFor="email" className="text-pink-500 text-sm font-semibold">
        Email
      </label>
      <Field
        name="email"
        placeholder="jane@acme.com"
        type="email"
        validate={validateEmail}
        className="border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white"
      />
      {errors.email && touched.email && (
        <p className="text-yellow-400 text-sm">Completar</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="border-4 border-yellow-400 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 disabled:bg-gray-400"
      >
        Submit
      </button>
    </Form>
  )}
</Formik>

    </div>
  );
};

export default CartForm;
