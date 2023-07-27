import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
            errors.firstName = 'FirstName is required';
        } else if (values.firstName.length > 10) {
            errors.firstName = 'Must be 10 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'LastName is required';
        } else if (values.lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit'>Registrar</button>
            </form>
        </div>
    )
}
