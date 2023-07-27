import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe tener 10 caracteres o menos').required('El nombre es requerido'),
            lastName: Yup.string().max(20, 'Debe tener 10 caracteres o menos').required('El apellido es requerido'),
            email: Yup.string().email('Email invalido').required('El email es requerido'),
        }),
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit'>Registrar</button>
            </form>
        </div>
    )
}
