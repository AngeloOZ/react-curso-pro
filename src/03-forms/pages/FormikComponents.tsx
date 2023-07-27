import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('El nombre es requerido'),
        lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('El apellido es requerido'),
        email: Yup.string().email('Email invalido').required('El email es requerido'),
        terms: Yup.boolean()
            .required('Debe aceptar los terminos y condiciones')
            .oneOf([true], 'Debe aceptar los terminos y condiciones'),
        jobType: Yup.string()
            .required('Debe seleccionar un tipo de trabajo')
            .notOneOf(['it-senior'], 'Tipo de trabajo invalido')
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={validationSchema}

            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                type="text"
                                name="firstName"
                            />
                            <ErrorMessage name="firstName" component="span" />


                            <label htmlFor="LastName">Last Name</label>
                            <Field
                                type="text"
                                name="lastName"
                            />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email Address</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor='jobType'>Job Type</label>
                            <Field name="jobType" as='select'>
                                <option value="">Select a job type</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-senior</option>
                                <option value="it-junior">It-junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field type="checkbox" name="terms" />
                                Terms and conditons
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type='submit'>Registrar</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
