import { useState } from 'react';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = await authService.login({ email, password });
    setUser(userData.user);
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 p-4">
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button>Login</button>
    </form>
  );
}
