import React, { useState } from 'react';

const AuthModal = ({ mode, onClose, onLogin, onSignup, onSwitchMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'login') {
            onLogin(email, password);
        } else {
            onSignup(name, email, password);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    {mode === 'signup' && (
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">
                        {mode === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p style={{ marginTop: '1em' }}>
                    {mode === 'login' ? (
                        <>No account? <span onClick={() => onSwitchMode('signup')} className="link">Sign up</span></>
                    ) : (
                        <>Have an account? <span onClick={() => onSwitchMode('login')} className="link">Login</span></>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
