'use client';

import { useState } from 'react';
import { login } from '../../../lib/apps';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle login
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginPage;
