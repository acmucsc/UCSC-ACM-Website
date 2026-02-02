import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (loading || !user) {
        return <div className="profile-container">Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>Welcome, {user.name}</h1>
                <div className="profile-info">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Major:</strong> {user.major || 'Not specified'}</p>
                    <p><strong>Graduation Year:</strong> {user.graduationYear || 'Not specified'}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
                <button onClick={logout} className="logout-btn">Logout</button>
            </div>
        </div>
    );
};

export default Profile;
