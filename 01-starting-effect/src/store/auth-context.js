import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === 'LOGIN') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHanlder = () => {
    localStorage.setItem('isLoggedIn', 'LOGIN');
    setIsLoggedIn(true);
  };

  const logoutHanlder = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHanlder,
        onLogin: loginHanlder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
