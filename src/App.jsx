import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/footer';
import Popup from './components/popup/Popup';
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
      <Popup />
      <Layout />
    </S.Wrapper>

  );
}

export default App;