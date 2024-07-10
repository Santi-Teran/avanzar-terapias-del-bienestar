'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = (data) => {
    const newErrors = {};
    if (!data.username) newErrors.username = 'El nombre de usuario es obligatorio';
    if (!data.password) newErrors.password = 'La contraseña es obligatoria';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validate({ username, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post('https://avanzarbackend.azurewebsites.net/login', {
        username,
        password,
      });
      localStorage.setItem('authToken', response.data.token);
      toast.success('Inicio de sesión exitoso');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Nombre de usuario o contraseña incorrectos');
      setErrors({ login: 'Nombre de usuario o contraseña incorrectos' });
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          {errors.login && <div className="text-red-500 mb-4">{errors.login}</div>}
          <button 
            type="submit" 
            className={`w-full py-2 rounded text-white ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-violet-800 hover:scale-105 transition-all'}`}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;