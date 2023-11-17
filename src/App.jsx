import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/footer';
import Loading from './pages/loading/Loading.jsx';
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
      <Loading />
      <Layout />
    </S.Wrapper>

  );
}

export default App;