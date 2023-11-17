import React from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../components/button/buttonPopup/ButtonPopup.jsx";
import ButtonMain from "../../components/button/buttonMain/ButtonMain.jsx";

function Main(){
  return(
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>홍봉기(2023017368)님</S.Title>
        <S.Title style={{color : "#FF6363"}}>안녕하세요!</S.Title>
      </S.TitleWrapper>

      <S.ContentWrapper>

        <S.NavWrapper>
          <ButtonMain 
            title="개인정보"/>
        </S.NavWrapper>

        <S.NavWrapper>
          <ButtonMain 
            title="사물함 개폐 로그 조회"/>
        </S.NavWrapper>

        <S.NavWrapper>
          <ButtonMain 
            title="사물함 관리"/>
        </S.NavWrapper>
        
      </S.ContentWrapper>

      <S.ButtonWrapper>
        <ButtonPopup title={"로그아웃"} buttonType={"important"} />
      </S.ButtonWrapper>

    </S.Wrapper>
  );
}

export default Main;