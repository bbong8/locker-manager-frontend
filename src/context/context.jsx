import React, { createContext, useState } from 'react';

// UserContext 생성
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({}); // 유저 데이터 저장용 state

  const saveUser = (userData) => { // 유저 데이터 저장용 함수
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};