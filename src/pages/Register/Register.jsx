import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.css'; // Reuse login styles

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        major: '',
        graduationYear: ''
    });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const { name, email, password, confirmPassword, major, graduationYear } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const res = await register({ name, email, password, major, graduationYear });
        if (res.success) {
            navigate('/profile');
        } else {
            setError(res.error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper" style={{ maxWidth: '500px' }}>
                <h2>Member Registration</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
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
                        <label>Major</label>
                        <input
                            type="text"
                            name="major"
                            value={major}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Graduation Year</label>
                        <input
                            type="text"
                            name="graduationYear"
                            value={graduationYear}
                            onChange={onChange}
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
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Register</button>
                </form>
                <p className="redirect-text">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        </div>
    );
};

export default Register;
