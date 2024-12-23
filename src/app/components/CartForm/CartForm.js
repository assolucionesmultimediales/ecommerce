"use client";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const CartForm = () => {
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Requiredo";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalido";
    }
    return error;
  };

  const firstName = (value) => {
    let error;
    if (value === "") {
      error = "Requerido";
    }
    return error;
  };

  const addContact = async (values) => {
    const data = { contactData: values };
    const response = await axios.post("/api/add-contact", data);
  };

  return (
    <div className='mt-3 mr-44'>
      <h1 className='mb-4 w-64 text-lg'>Dejanos tus datos</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          direccion: "",
          email: "",
        }}
        onSubmit={async (values) => {
          addContact(values);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className='flex flex-col space-y-4 w-96'>
            <label
              htmlFor='firstName'
              className='text-pink-500 text-base font-semibold font-montserrat'
            >
              Nombre

            </label>
            <Field
              name='firstName'
              placeholder=''
              validate={firstName}
              className='border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white font-inter text-base'
            />
            {errors.firstName && touched.firstName && (
              <p className='text-yellow-400 text-sm'>Completar</p>
            )}

            <label
              htmlFor='lastName'
              className='text-pink-500 text-base font-semibold font-montserrat'
            >
              Apellido

            </label>
            <Field
              name='lastName'
              placeholder=''
              className='border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white font-inter text-base'
            />
            <label
              htmlFor='direccion'
              className='text-pink-500 text-base font-semibold font-montserrat'
            >
              Dirección

            </label>
            <Field
              name='direccion'
              placeholder=''
              className='border-2 border-pink-500 bg-pink-200 text-white p-2 rounded-md placeholder-white font-inter text-base'
            />

            <label
              htmlFor='email'
              className='text-pink-500 text-base font-semibold font-montserrat'
            >
              Email
              
            </label>
            <Field
              name='email'
              placeholder=''
              type='email'
              validate={validateEmail}
              className='border-2 border-pink-500 bg-pink-200 text-white rounded-md placeholder-white font-inter text-base p-2'
            />
            {errors.email && touched.email && (
              <p className='text-yellow-400 text-sm'>Completar</p>
            )}

<Link   className="border-4 border-yellow-400 bg-pink-500 text-white text-center p-2 rounded-md hover:bg-pink-200 hover:border-4 hover:border-pink-500 hover:text-pink-500 hover:font-bold"
             href={`/graciasPorComprar`}>
            <button
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;
