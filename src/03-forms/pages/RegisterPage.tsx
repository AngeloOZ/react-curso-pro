import { useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface RegisterData {
    name: string;
    email: string;
    password: string;
    password2: string;
}

export const RegisterPage = () => {

    const { formData, onChange, resetForm, isValidEmail, email, name, password, password2 } = useForm<RegisterData>({ email: '', name: '', password: '', password2: '' });



    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                />

                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name='password2'
                    value={password2}
                    onChange={onChange}
                />

                <button>Create</button>
                <button type='button' onClick={resetForm}>reset form</button>
            </form>
        </div>
    )
}
