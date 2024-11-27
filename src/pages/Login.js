import React, { useState, useEffect } from 'react';
import users from '../data/Users'; // Pastikan file Users.js ada di dalam src/data
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // Mengambil email yang diingat dari localStorage saat komponen dimuat
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin = () => {
    // Validasi email dan password
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError('');
      localStorage.setItem('user', JSON.stringify(user)); // Simpan user di localStorage

      // Simpan email jika checkbox "Ingat Saya" diaktifkan
      if (remember) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      // Navigasi berdasarkan peran pengguna
      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'dosen':
          navigate('/dosen');
          break;
        case 'mahasiswa':
          navigate('/mahasiswa');
          break;
        default:
          setError('User  role not recognized');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">LOGIN</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <InputField
          label="Email Address"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<i className="fas fa-envelope text-gray-500 w-6 h-6"></i>}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<i className="fas fa-lock text-gray-500 w-6 h-6"></i>}
        />

        <Checkbox
          id="remember"
          label="Remember me"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />

        <Button onClick={handleLogin} label="LOGIN" />
      </div>
    </div>
  );
};

export default Login;