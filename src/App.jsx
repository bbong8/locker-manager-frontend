import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './context/context.jsx';
import Footer from './components/layouts/Footer.jsx';
import * as S from'./style.jsx';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}



function App() {
  return (
    <UserContextProvider>
      <S.Wrapper>
        <Layout />
      </S.Wrapper>
    </UserContextProvider>
  ); 
}

export default App;