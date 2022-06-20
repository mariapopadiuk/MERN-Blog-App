import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const now = new Date();
  const timestamp = Math.round(now / 1000)

  const login = useCallback((jwtToken) => {
    setToken(jwtToken.accessToken);
    setUserId(jwtToken.userId);
    localStorage.setItem('token', JSON.stringify(jwtToken));
    if (!localStorage.getItem('whenToLogOut')) {
      localStorage.setItem('whenToLogOut', timestamp + 60);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.clear();
  }, []);

  //check if token exists in localstorage 
  useEffect(() => {
    let jwtObj = localStorage.getItem('token');
    let whenToLogOut = localStorage.getItem('whenToLogOut');
    jwtObj = JSON.parse(jwtObj);

    if (jwtObj && timestamp < whenToLogOut) {
      login(jwtObj);
    } else {
      logout();
    }
  }, []);

  return { login, logout, token, userId };
};