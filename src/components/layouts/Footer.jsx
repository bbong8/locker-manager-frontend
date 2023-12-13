import React from "react";
import * as S from "./style.jsx";

function Footer() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.ContentInfo>
          경북대학교 컴퓨터학부 학생회 집행부
        </S.ContentInfo>
        <S.ContentInfo>
          문의 Kakao Id : hamjisan_tiger
        </S.ContentInfo>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.MadeBy>Made By</S.MadeBy>
        <S.InstaId href="https://www.instagram.com/_bbong8/" style={{justifyContent: "flex-end"}}>
          @_bbong8
        </S.InstaId>
        <S.InstaId href="https://www.instagram.com/kms62299/" style={{justifyContent: "center"}}>
          @kms62299
        </S.InstaId>
        <S.InstaId href="https://www.instagram.com/kookyrey112_/">
          @kookyrey112_
        </S.InstaId>
        <S.InstaId href="https://www.instagram.com/lsangminn200/" >
          @lsangminn200
        </S.InstaId>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default Footer;