import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setError('');
        const res = await login({ email, password });
        if (res.success) {
            navigate('/profile');
        } else {
            setError(res.error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2>Member Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="redirect-text">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        </div>
    );
};

export default Login;
