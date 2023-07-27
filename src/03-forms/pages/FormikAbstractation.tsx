import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';

export const FormikAbstractation = () => {

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
            <h1>Formik Abstraction</h1>

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
                    (_) => (
                        <Form>
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                placeholder='Jhon'
                            />
                            <MyTextInput
                                label='Last Name'
                                name='lastName'
                                placeholder='Doe'
                            />
                            <MyTextInput
                                label='Email Address'
                                name='email' type='email'
                                placeholder='jhon@dominio.com'
                            />

                            <MySelectInput name='jobType' label='Job Type'>
                                <option value="">Select a job type</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-senior</option>
                                <option value="it-junior">It-junior</option>
                            </MySelectInput>

                            <MyCheckboxInput label='Terms & Conditions' name='terms' />

                            <button type='submit'>Registrar</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
