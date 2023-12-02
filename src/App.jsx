import React from 'react';
import { Outlet } from 'react-router-dom';
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

    <S.Wrapper>
      <Layout />
    </S.Wrapper>

  );
}

export default App;