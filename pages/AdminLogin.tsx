import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Keep the local storage as a fallback/simple check for now, 
            // although 'auth' state is the real truth.
            localStorage.setItem('is_admin_authenticated', 'true');
            navigate('/admin');
        } catch (err: any) {
            console.error("Login failed", err);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-cyber-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-cyber-800 border border-cyber-700/50 rounded-xl p-8 shadow-2xl">
                <div className="flex justify-center mb-6">
                    <div className="bg-cyber-900/50 p-4 rounded-full border border-cyber-700">
                        <Shield className="w-10 h-10 text-cyber-accent" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-white mb-8">Admin Access</h2>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Shield className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="email"
                                className="block w-full pl-10 bg-cyber-900 border border-cyber-700 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 focus:border-transparent transition-all"
                                placeholder="Enter admin email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="password"
                                className="block w-full pl-10 bg-cyber-900 border border-cyber-700 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 focus:border-transparent transition-all"
                                placeholder="Enter admin password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded border border-red-500/20">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-cyber-accent text-cyber-900 font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                    >
                        Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
