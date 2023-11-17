import React from "react";
import * as S from "./style.jsx";
import MainLogo from "./MainLogo.png"

function Loading(){

  return(
    <S.Wrapper>

      <S.TitleWrapper>
        <S.Title>경북대학교 사물함 관리 시스템</S.Title>
        <S.Underline></S.Underline>
      </S.TitleWrapper>

      <S.LogoWrapper>
        <S.Logo src={MainLogo}></S.Logo>
      </S.LogoWrapper>

    </S.Wrapper>
  );

}

export default Loading;