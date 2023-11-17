import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/footer';
import Main from './pages/main/Main.jsx';
import Auth from './pages/auth/Auth.jsx';
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
    <S.Wrapper>
      <Layout />
      <Main />
    </S.Wrapper>

  );
}

export default App;