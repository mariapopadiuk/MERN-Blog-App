import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);

    localStorage.setItem('token', JSON.stringify({
    token: jwtToken
    }));
  }, []);


  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('token'));

    if (data && data.token) {
      login(data.token);
    }
  }, [login]);


  return { login, logout, token};
};