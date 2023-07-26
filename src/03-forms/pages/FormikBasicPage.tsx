import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: 'Angello',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
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
                />
                <span></span>

                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    name="LastName"
                    value={values.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="email"
                    name="emailAddress"
                    value={values.email}
                    onChange={handleChange}
                />

                <button>Registrar</button>
            </form>
        </div>
    )
}
