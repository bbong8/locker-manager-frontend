import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer.jsx';
import Main from './pages/main/Main.jsx';
import Auth from './pages/auth/Auth.jsx';
import Log from './pages/lockerLog/Log.jsx';
import Locker from './pages/locker/Locker.jsx';
import User from './pages/userInfo/User.jsx';
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
      <User />
      <Layout />
    </S.Wrapper>

  );
}

export default App;